import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store';
import { CardType } from '~/type/card';

export const useGetUserCard = () => {
  const [cards, setCards] = useState<CardType[]>([]);

  const user_id = useSelector((state: AppState) => {
    return state.user.current_user_id;
  });

  useEffect(() => {
    const card_ids = fetch(`http://localhost:8083/user/${user_id}`)
      .then((response) => response.json())
      .then((json) => {
        // TODO validate json
        return json.cardList;
      })
      .catch((error) => console.error(error));

    card_ids.then((ids) => {
      Promise.all(
        ids.map(async (id: number) => {
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
    });
  }, [user_id]);

  return cards;
};
