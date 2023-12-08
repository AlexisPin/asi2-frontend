import { useState } from 'react';

import { Box } from '@mui/material';
import { GridRowsProp } from '@mui/x-data-grid';

import GameCard from '../card/GameCard';
import Header from '../header/Header';
import { useGetCardToSell } from './hooks/useGetCardToSell';
import { TableCard } from './table/TableCard';

export const CardList = ({}) => {

    const cardsToSell:GridRowsProp = useGetCardToSell();

    const [selectedCard, setSelectedCard] = useState(-1);

    return (
        <>
            <Header />
            <Box sx={{
                display: 'flex',
                width: '100%'
            }}>
                <TableCard data={cardsToSell} setSelectedCard={setSelectedCard}/>
                <GameCard id={selectedCard} />
            </Box>
        </>
    )
}

export default CardList;