import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store';

export const useGetUserCard = () => {
  const [cards, setCards] = useState([]);

  const currentUser = useSelector((state: AppState) => {
    return state.user.current_user;
  });

  useEffect(() => {
    fetch(`http://localhost:8083/user/${currentUser.id}`)
      .then((response) => response.json())
      .then((json) => setCards(json))
      .catch((error) => console.error(error));
  }, [currentUser.id]);

  return cards;
};
