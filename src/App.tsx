import './App.css';

import { Suspense, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { Routes } from 'react-router';
import { Route } from 'react-router-dom';

import { routes } from './boot/router';
import Chat from './components/chat/Chat';
import Main from './components/layout/main';
import { Protected } from './protect/protected';
import { socket } from './socket';
import { AppState } from './store';
import { splitBy } from './utils/split-routes';
import { Alert, Snackbar } from '@mui/material';

export const clientSocket = socket;

function App() {
  const [protectedRoutes, guestRoutes] = splitBy(routes, (route) => route.protected);

  const userId = useSelector((state: AppState) => state.user.current_user_id);
  const [isSnackbarOpen, setIsSnackBarOpen] = useState(false);

  useEffect(() => {
    clientSocket.connect();
    if (userId !== -1) {
      setIsSnackBarOpen(true);
      clientSocket.emit('login', userId);
    }

    return () => {
      clientSocket.disconnect();
    };
  }, [userId]);

  return (
    <Main>
      {userId !== -1 && <Chat socket={clientSocket} />}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {guestRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route element={<Protected />}>
            {protectedRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Route>
        </Routes>
        <Snackbar
          open={isSnackbarOpen}
          autoHideDuration={3000}
          onClose={() => setIsSnackBarOpen(false)}
        >
          <Alert onClose={() => setIsSnackBarOpen(false)} severity="success" sx={{ width: '100%' }}>
            Login successful
          </Alert>
        </Snackbar>
      </Suspense>
    </Main>
  );
}

export default App;
