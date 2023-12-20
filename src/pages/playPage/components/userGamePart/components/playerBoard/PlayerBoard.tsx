import { ListItem, Stack } from "@mui/material";
import { CardSimple } from "./components/CardSimple";
import { CardType } from "~/type/card";


export const PlayerBoard = ({setSelectedCard, cardList}: {setSelectedCard: (card: CardType) => void; cardList: CardType[]}) => {

    let cardsDisplay = cardList.map(
        (card) => 
            <ListItem onClick={ () => setSelectedCard(card)}>
                <CardSimple card={card}></CardSimple>
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
}