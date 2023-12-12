import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Box } from '@mui/material';
import { GridRowsProp } from '@mui/x-data-grid';

import GameCard from '../../components/card/GameCard';
import { TableCard } from '../../components/tableCard/TableCard';
import { update_shop_state } from '../../slices/shopSlice';
import { useGetUserCard } from './hooks/useGetUserCard';

export const CardBuy = () => {
  const cardsToSell: GridRowsProp = useGetUserCard();

  const [selectedCard, setSelectedCard] = useState(-1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(update_shop_state('buy'));
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
