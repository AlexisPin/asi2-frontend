import { PlayerBoard } from "./components/playerBoard/PlayerBoard";
import { PlayerOverview } from "./components/PlayerOverview";
import { CardDetail } from "./components/CardDetail";
import { Stack } from "@mui/material";
import { useState } from "react";
import { CardType } from "~/type/card";
import { User } from "~/type/user";



export const UserGamePart = ({cardList, user}: {cardList: CardType[]; user: User}) => {

    const [selectedCard, setSelectedCard] = useState<CardType | undefined>(cardList[0])

    return (
        <>
            <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
            >
                <PlayerOverview user={user}></PlayerOverview>
                <PlayerBoard setSelectedCard={setSelectedCard} cardList={cardList}></PlayerBoard>
                <CardDetail card={selectedCard}></CardDetail>
            </Stack>
        </>
    )
}