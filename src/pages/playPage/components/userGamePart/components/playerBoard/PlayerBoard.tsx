import { ListItem, Stack } from "@mui/material";
import { CardSimple } from "./components/CardSimple";
import { CardType } from "~/type/card";
import { memo } from "react";


export const PlayerBoard = memo(({ setSelectedCard, cardList }: { setSelectedCard: (id: number) => void; cardList: CardType[] }) => {

    const cardsDisplay = cardList.map(

        (card) =>
            <ListItem key={card.id} onClick={() => setSelectedCard(card.id)}>
                <CardSimple state={card.state as "ALIVE" | "DEAD"} card={card}></CardSimple>
            </ListItem>
    );

    return (
        <>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="baseline"
            >
                {cardsDisplay}
            </Stack>
        </>
    )
})
