import { useEffect, useState } from 'react';
import { CardType } from '../../../type/card';

export const useCardInfo = (id: number): CardType | undefined => {
  const [card, setCard] = useState<CardType>();

  useEffect(() => {
    if (id === -1) return;
    fetch(`http://localhost:8083/card/${id}`)
      .then((response) => response.json())
      .then((json) => setCard(json))
      .catch((error) => console.error(error));
  }, [id]);

  return card;
};
