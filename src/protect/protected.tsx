import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { AppState } from '../store';

export const Protected = ({ redirectPath = '/login' }: { redirectPath?: string }) => {
  const user = useSelector((state: AppState) => state.user.current_user);

  if (user) {
    return <Outlet />;
  }
  return <Navigate to={redirectPath} replace />;
};
