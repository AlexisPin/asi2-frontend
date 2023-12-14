import './App.css';

import { Suspense } from 'react';

import { Routes } from 'react-router';
import { Route } from 'react-router-dom';

import { routes } from './boot/router';
import Main from './components/layout/main';
import { Protected } from './protect/protected';
import { splitBy } from './utils/split-routes';

function App() {
  const [protectedRoutes, guestRoutes] = splitBy(routes, (route) => route.protected);

  return (
    <Main>
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
