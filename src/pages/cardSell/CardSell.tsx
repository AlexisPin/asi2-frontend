import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Box } from '@mui/material';

import GameCard from '../../components/card/GameCard';
import { useGetCardToSell } from './hooks/useGetCardToSell';
import { TableCard } from '../../components/tableCard/TableCard';
import { update_shop_state } from '../../slices/shopSlice';
import { CardType } from '../../type/card';

export const CardSell = () => {
  const cardsToSell: CardType[] = useGetCardToSell();

  const [selectedCard, setSelectedCard] = useState(-1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(update_shop_state('sell'));
  });

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
        }}
      >
        <TableCard data={cardsToSell} setSelectedCard={setSelectedCard} />
        <GameCard id={selectedCard} />
      </Box>
    </>
  );
};
