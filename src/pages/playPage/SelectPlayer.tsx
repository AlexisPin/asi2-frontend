import { Button, Stack } from "@mui/material"
import { useConnectedUsers } from "~/components/chat/hooks/useConnectedUsers"
import { clientSocket } from "~/App";
import { useSelector } from "react-redux";
import { AppState } from '~/store';
import { useEffect } from "react";


export const SelectPlayer = () => {
    const user = useSelector((state: AppState) => state.user.current_user);

    useEffect(() => {
        clientSocket.on('request_game_room', (gameRoomId, name) => {
            console.log(`gameRoomId: ${gameRoomId}, name: ${name}`)
        })
        return () => {
            clientSocket.off('request_game_room')
        }
    }, [])

    const handleSelectPlayer = (playerId: number) => {
        clientSocket.emit('request_game_room', playerId, user!.login!)
    }


    const players = useConnectedUsers(true)
    return (

        <div>
            <h1> Select the player to play </h1>

            <Stack gap={2} width={'50%'}>

                {players.map((player) => (
                    <Button onClick={() => handleSelectPlayer(player.id)} variant="contained" color="primary" key={player.id}>
                        {player.login}
                    </Button>
                ))}

            </Stack>

        </div>


    )
}