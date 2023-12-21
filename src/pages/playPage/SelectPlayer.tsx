import { Box, Button, Container, Stack } from "@mui/material"
import { useConnectedUsers } from "~/components/chat/hooks/useConnectedUsers"
import { clientSocket } from "~/App";
import { useSelector } from "react-redux";
import { AppState } from '~/store';
import { useEffect, useState } from "react";
import { AcceptDialog } from "./components/AcceptDialog";


export const SelectPlayer = () => {
    const [updateUsers, setUpdateUsers] = useState(false);
    const user = useSelector((state: AppState) => state.user.current_user);

    useEffect(() => {
        clientSocket.on('request_game_room', (gameRoomId, name) => {
            console.log(`gameRoomId: ${gameRoomId}, name: ${name}`)
        })
        clientSocket.on('notification', (message) => {
            if (message === 'users_change') {
                setUpdateUsers(prev => !prev)
            }
        })
        return () => {
            clientSocket.off('request_game_room')
            clientSocket.off('notification')
        }
    }, [])


    const players = useConnectedUsers(updateUsers).filter(player => player.id !== user!.id)

    if (!user) return null

    const handleSelectPlayer = (playerId: number) => {
        clientSocket.emit('request_game_room', playerId, user.login!)
    }

    if (players.length === 0) return (
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
            </Box>
        </Container>
    )

    return (<>
        <Container component="div" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <h1> Select a player to play with </h1>
                <Stack gap={2} width={'50%'}>
                    {players.map((player) => (
                        <Button onClick={() => handleSelectPlayer(player.id)} variant="contained" color="primary" key={player.id}>
                            {player.login}
                        </Button>
                    ))}
                </Stack>
            </Box>
        </Container>
        <AcceptDialog />
    </>
    )
}
