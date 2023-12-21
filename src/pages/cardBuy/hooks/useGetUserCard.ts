import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store';
import { CardType } from '~/type/card';

export const useGetUserCard = () => {
  const [cards, setCards] = useState<CardType[]>([]);

  const user = useSelector((state: AppState) => {
    return state.user.current_user;
  });

  useEffect(() => {
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
        // TODO validate cards
        setCards(cards);
      });
  }, [user]);

  return cards;
};
