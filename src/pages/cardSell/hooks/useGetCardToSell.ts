import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { update_transaction_state } from '~/slices/shopSlice';
import { AppState } from '~/store';

export const useGetCardToSell = () => {
  const [cards, setCards] = useState([]);
  const [isFirstExecution, setIsFirstExecution] = useState(true);

  const transactionState = useSelector((state: AppState) => {
    return state.shop.transaction_state;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (transactionState === 'success' || isFirstExecution) {
      fetch('http://localhost:8083/cards_to_sell')
        .then((response) => response.json())
        .then((json) => {
          if (isFirstExecution) {
            setIsFirstExecution(false);
          }
          dispatch(update_transaction_state(''));

          return setCards(json);
        })
        .catch((error) => console.error(error));
    }
  }, [transactionState, isFirstExecution, dispatch]);

  return cards;
};
