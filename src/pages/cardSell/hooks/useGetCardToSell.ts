import { useEffect, useState } from 'react';

export const useGetCardToSell = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8083/cards_to_sell')
      .then((response) => response.json())
      .then((json) => setCards(json))
      .catch((error) => console.error(error));
  }, []);

  return cards;
};
