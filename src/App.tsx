import './App.css';

import {
  Suspense,
  useEffect,
} from 'react';

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

export const clientSocket = socket;

function App() {
  const [protectedRoutes, guestRoutes] = splitBy(routes, (route) => route.protected);

  const userId = useSelector((state: AppState) => state.user.current_user_id);
  
  useEffect(() => {
    clientSocket.connect();
    if (userId !== -1) {
      clientSocket.emit('login', userId);
    }

    return () => {
      clientSocket.off('login');
      clientSocket.disconnect();
    }
  }, [userId])

  return (
    <Main>
      {userId !== -1 && <Chat socket={clientSocket} /> }
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
      </Suspense>
    </Main>
  );
}

export default App;
