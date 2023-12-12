import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store';
import { update_current_user } from '../slices/userSlice';
import { useNavigate } from 'react-router';

export const useUser = () => {
  const user_id = useSelector((state: AppState) => state.user.current_user_id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user_id === -1) return;
    fetch(`http://localhost:8083/user/${user_id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch(update_current_user(json));
        navigate('/');
      })
      .catch((error) => console.error(error));
  }, [user_id]);
};
