import { PlayerBoard } from "./components/playerBoard/PlayerBoard";
import { PlayerOverview } from "./components/PlayerOverview";
import { CardDetail } from "./components/CardDetail";
import { Stack } from "@mui/material";
import { useState } from "react";
import { CardType } from "~/type/card";
import { PlayerDto } from "~/type/socket";

export const UserGamePart = ({ cardList, user, turn, setCard }: { cardList: CardType[], user: PlayerDto, turn: number, setCard: (id: number) => void }) => {

    const [selectedCard, setSelectedCard] = useState<CardType | undefined>(cardList[0])

    const handleCardClick = (id: number) => {
        setCard(id)
        setSelectedCard(cardList.find(card => card.id === id))
    }

    return (
        <>
            <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                margin={3}
                borderRadius={4}
                boxShadow={2}
                bgcolor={turn === user.id ? "lightgreen" : "lightgray"}
            >
                <PlayerOverview user={user}></PlayerOverview>
                <PlayerBoard setSelectedCard={handleCardClick} cardList={cardList}></PlayerBoard>
                <CardDetail card={selectedCard}></CardDetail>
            </Stack>
        </>
    )
}
