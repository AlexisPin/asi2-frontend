import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Box } from '@mui/material';

import GameCard from '../../components/card/GameCard';
import { TableCard } from '../../components/tableCard/TableCard';
import { update_shop_state } from '../../slices/shopSlice';
import { CardType } from '../../type/card';
import { useGetUserCard } from '../cardBuy/hooks/useGetUserCard';

const CardSell = () => {
  const cardsToSell: CardType[] = useGetUserCard();

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

export default CardSell;
