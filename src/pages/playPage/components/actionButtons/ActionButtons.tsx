import { Button, Stack } from "@mui/material"
import { SwordsIcon } from "lucide-react";
import { useSelector } from "react-redux";
import { clientSocket } from "~/App";
import { AppState } from "~/store";

export const ActionButtons = ({ gameId, attackCard, targetCard, turn }: { gameId: string, attackCard?: number, targetCard?: number, turn: number }) => {
    const user_id = useSelector((state: AppState) => state.user.current_user_id)

    const handleEndTurn = () => {
        if (user_id === turn) clientSocket.emit("end_turn", gameId)
    }

    const handleAttack = () => {
        if (attackCard && targetCard && user_id === turn) {
            clientSocket.emit("attack", gameId, targetCard, attackCard,)
        }
    }

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ paddingLeft: "100px", paddingRight: "100px" }}
        >
            <Button
                onClick={handleEndTurn}
                variant="contained"
                sx={{ paddingTop: "11px" }}
                disabled={user_id !== turn}
            >
                End Turn
            </Button>

            <Button
                onClick={handleAttack}
                variant="contained"
                sx={{ paddingTop: "11px" }}
                disabled={!attackCard || !targetCard || user_id !== turn}
            >
                <SwordsIcon size={24} />
                Attack
            </Button>
        </Stack>
    )
}
