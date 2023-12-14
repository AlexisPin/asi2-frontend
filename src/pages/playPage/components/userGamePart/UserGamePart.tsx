import { PlayerBoard } from "./components/playerBoard/PlayerBoard";
import { PlayerOverview } from "./components/PlayerOverview";
import { GameCard } from "../../../../components/card/GameCard";
import { ListItem, Stack } from "@mui/material";



export const UserGamePart = () => {



    return (
        <>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="baseline"
            >
                <ListItem>
                    <PlayerOverview></PlayerOverview>
                </ListItem>
                <ListItem>
                    <PlayerBoard></PlayerBoard>
                </ListItem>
                <ListItem>
                    <GameCard id={1}></GameCard>
                </ListItem>
            </Stack>
        </>
    )
}