import { ListItem, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { AppState } from "~/store";
import { CardSimple } from "./components/userGamePart/components/playerBoard/components/CardSimple";
import { CardType } from "~/type/card";
import { useMemo, useState } from "react";
import { useGetUserCard } from "../cardBuy/hooks/useGetUserCard";

export const SelectCards = () => {
    
    const user = useSelector((state: AppState) => state.user.current_user);
    const [selectedCards, setSelectedCards] = useState<number[]>([]);
    if (!user) return null

    const handleChangeSelectedCards = (id: number) => {
        if (selectedCards.includes(id)) {
            setSelectedCards(prev => prev.filter(cardId => cardId !== id))
        } else if (selectedCards.length < 5) {
            setSelectedCards(prev => [...prev, id])
        }
    }

    const cards: CardType[] = useGetUserCard();
    console.log(cards);

    let cardsDisplay = useMemo( () =>  cards.map(
        (card) => {
                const selected = selectedCards.includes(card.id)
                console.log(selected)
                return (
                    <ListItem sx={selected ? { backgroundColor: "red" } : undefined} onClick={ () => handleChangeSelectedCards(card.id)}>
                        <CardSimple card={card}></CardSimple>
                    </ListItem>
                )
            }
    ), [selectedCards, cards]);

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