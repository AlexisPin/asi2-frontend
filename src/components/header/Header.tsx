import { AppBar, Box, Toolbar, Typography, capitalize } from '@mui/material';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import { useLocation } from 'react-router';
import Login from '~/pages/login';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  const user = useSelector((state: AppState) => state.user.current_user);

  if (!user) return <Login />;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {user.login}
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {location.pathname !== '/' && <span> {capitalize(location.pathname.slice(1))}</span>}
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {location.pathname !== '/' && (
              <Link to="/" className="flex items-center gap-2 text-base">
                <Home />
                Home
              </Link>
            )}
          </Typography>
          <Typography variant="h6" component="div">
            {user.account} $
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
