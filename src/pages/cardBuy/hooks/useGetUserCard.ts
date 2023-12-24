import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../store';
import { CardType } from '~/type/card';
import { update_transaction_state } from '~/slices/shopSlice';

export const useGetUserCard = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [isFirstExecution, setIsFirstExecution] = useState(true);

  const user = useSelector((state: AppState) => {
    return state.user.current_user;
  });

  const transactionState = useSelector((state: AppState) => {
    return state.shop.transaction_state;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (transactionState === 'success' || isFirstExecution) {
      const card_ids = user?.cardList || [];

      Promise.all(
        card_ids.map(async (id: number) => {
          try {
            const response = await fetch(`http://localhost:8083/card/${id}`);
            return await response.json();
          } catch (error) {
            return console.error(error);
          }
        }),
      ).then((cards) => {
        if (isFirstExecution) {
          setIsFirstExecution(false);
        }
        dispatch(update_transaction_state(''));
        setCards(cards);
      });
    }
  }, [user, isFirstExecution, transactionState, dispatch]);

  return cards;
};
