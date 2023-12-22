import { useEffect, useState } from "react";
import { SelectPlayer } from "./SelectPlayer";
import { AllyGamePart } from "./components/AllyGamePart";
import { EnemyGamePart } from "./components/EnemyGamePart";
import { ActionButtons } from "./components/actionButtons/ActionButtons";
import { clientSocket } from "~/App";
import { GameCard, GameState, PlayerDto } from "~/type/socket";
import { SelectCards } from "./SelectCards";
import { Box, Chip, Container } from "@mui/material";
import { Check, LoaderIcon } from "lucide-react";
import { useSelector } from "react-redux";
import { AppState } from "~/store";
import { AcceptDialog } from "./components/AcceptDialog";


const PlayPage = () => {
    const user_id = useSelector((state: AppState) => state.user.current_user_id);
    const [gameState, setGameState] = useState<GameState>()
    const [myCardList, setMyCardList] = useState<GameCard[]>([])
    const [enemyCardList, setEnemyCardList] = useState<GameCard[]>([])
    const [myPlayer, setMyPlayer] = useState<PlayerDto>()
    const [enemyPlayer, setEnemyPlayer] = useState<PlayerDto>()
    const [attackCard, setAttackCard] = useState<number>()
    const [targetCard, setTargetCard] = useState<number>()

    useEffect(() => {
        clientSocket.on('update_game_room', (gameState) => {
            setGameState(gameState)
            if ('Playing' in gameState) {
                const state = gameState.Playing.state;
                const players = Object.entries(state.players)
                const myPlayer = players.find(([, player]) => player.id === user_id)
                setMyPlayer(myPlayer ? myPlayer[1] : undefined)
                const enemyPlayer = players.find(([, player]) => player.id !== user_id)
                setEnemyPlayer(enemyPlayer ? enemyPlayer[1] : undefined)
                if (myPlayer) setMyCardList(myPlayer[1].cards)
                if (enemyPlayer) setEnemyCardList(enemyPlayer[1].cards)
            }
        })
        return () => {
            clientSocket.off('update_game_room')
        }
    }, [])

    if (!gameState) return (
        <>
            <SelectPlayer />
            <AcceptDialog />
        </>
    )

    return (
        <>
            {('Playing' in gameState) ? (
                <>
                    <EnemyGamePart setTarget={setTargetCard} cardList={enemyCardList} user={enemyPlayer} turn={gameState.Playing.state.turn} />
                    <ActionButtons turn={gameState.Playing.state.turn} gameId={gameState.Playing.state.id} attackCard={attackCard} targetCard={targetCard} />
                    <AllyGamePart setAttack={setAttackCard} cardList={myCardList} user={myPlayer} turn={gameState.Playing.state.turn} />
                </>

            ) : ('Choosing' in gameState) ? (
                <SelectCards game_id={gameState.Choosing.game_id}></SelectCards>
            ) : ('NotStarted' in gameState) ? (
                <Container component="div">
                    <Box
                        sx={{
                            marginTop: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <h1> Waiting for players to connect </h1>
                        <h2>Game id :  {gameState.NotStarted.game_id} </h2>
                        <h2>Players : {gameState.NotStarted.players.map(player => player.name)} </h2>
                    </Box>
                </Container>
            ) : ('Waiting' in gameState) ? (
                <Container component="div">
                    <Box
                        sx={{
                            marginTop: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <h1> Waiting for players to choose cards </h1>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: '50%',
                                gap: 1
                            }}>
                            {gameState.Waiting.players.map(player => (
                                <Chip sx={
                                    {
                                        width: '30%',
                                    }
                                } key={player.id} label={player.name} color={player.ready ? "success" : "warning"} icon={player.ready ? <Check /> : <LoaderIcon />} />
                            ))}
                        </Box>

                    </Box>
                </Container>
            ) : (<>{JSON.stringify(gameState)}</>)}
        </>
    )
}

export default PlayPage;
