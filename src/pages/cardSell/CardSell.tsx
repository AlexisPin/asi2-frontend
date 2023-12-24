import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Alert, Box, Snackbar } from '@mui/material';

import { GameCard } from '../../components/card/GameCard';
import { TableCard } from '../../components/tableCard/TableCard';
import { update_shop_state } from '../../slices/shopSlice';
import { CardType } from '../../type/card';
import { useGetUserCard } from '../cardBuy/hooks/useGetUserCard';
import { AppState } from '~/store';

const CardSell = () => {
  const cardsToSell: CardType[] = useGetUserCard();

  const [selectedCard, setSelectedCard] = useState(-1);
  const [snackbarState, setSnackbarState] = useState<'success' | 'error' | ''>('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(update_shop_state('sell'));
  });

  const transactionState = useSelector((state: AppState) => {
    return state.shop.transaction_state;
  });

  useEffect(() => {
    if (transactionState === 'success' || transactionState === 'error') {
      setSnackbarState(transactionState);
    }
  }, [transactionState]);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
        }}
      >
        <TableCard data={cardsToSell} setSelectedCard={setSelectedCard} />
        <GameCard id={selectedCard} setSelectedCard={setSelectedCard} />
        {snackbarState ? (
          <Snackbar
            open={!!snackbarState}
            autoHideDuration={3000}
            onClose={() => {
              setSnackbarState('');
            }}
          >
            {snackbarState === 'success' ? (
              <Alert
                onClose={() => setSnackbarState('')}
                severity={'success'}
                sx={{ width: '100%' }}
              >
                {`Card sold successfully`}
              </Alert>
            ) : snackbarState === 'error' ? (
              <Alert onClose={() => setSnackbarState('')} severity={'error'} sx={{ width: '100%' }}>
                {`Error selling card`}
              </Alert>
            ) : (
              <></>
            )}
          </Snackbar>
        ) : null}
      </Box>
    </>
  );
};

export default CardSell;
