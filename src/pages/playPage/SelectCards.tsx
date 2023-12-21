import { Button, Container, ListItem, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { AppState } from "~/store";
import { CardSimple } from "./components/userGamePart/components/playerBoard/components/CardSimple";
import { CardType } from "~/type/card";
import { useMemo, useState } from "react";
import { useGetUserCard } from "../cardBuy/hooks/useGetUserCard";
import { clientSocket } from "~/App";

export const SelectCards = ({ game_id }: { game_id: string }) => {
    const user = useSelector((state: AppState) => state.user.current_user);
    const [selectedCards, setSelectedCards] = useState<number[]>([]);
    const cards: CardType[] = useGetUserCard();


    const handleChangeSelectedCards = (id: number) => {
        if (selectedCards.includes(id)) {
            setSelectedCards(prev => prev.filter(cardId => cardId !== id))
        } else if (selectedCards.length < 5) {
            setSelectedCards(prev => [...prev, id])
        }
    }

    const cardsDisplay = useMemo(() => cards.map(
        (card) => {
            const selected = selectedCards.includes(card.id)
            return (
                <ListItem key={card.id} sx={{ backgroundColor: selected ? "#2b3739" : "#abdbe3", borderRadius: '10px', width: "auto", marginInline: '10px' }} onClick={() => handleChangeSelectedCards(card.id)}>
                    <CardSimple card={card}></CardSimple>
                </ListItem>
            )
        }
    ), [selectedCards, cards]);

    if (!user) return null

    return (
        <Container
            sx={
                {
                    marginTop: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    fontSize: '2rem',
                }
            }
            component="div">
            <Typography
                sx={{
                    marginTop: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    fontSize: '2rem',
                }}
            > Select cards for game </Typography>
            <Stack
                marginTop={8}
                direction="row"
                justifyContent="space-between"
                alignItems="baseline"
            >
                {cardsDisplay}
            </Stack>

            <Button
                onClick={() => clientSocket.emit('ready_game_room', game_id, user.id, selectedCards)}
                variant="contained"
                color="secondary"
                disabled={selectedCards.length < 3}
                sx={{ marginTop: 2 }}
            >
                Confirm cards selection and make me ready
            </Button>
        </Container>
    )
}
