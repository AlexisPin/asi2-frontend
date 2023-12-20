import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const Login = lazy(() => import('~/pages/login'));

const Dashboard = lazy(() => import('~/pages/menu'));

const Buy = lazy(() => import('~/pages/cardBuy/CardBuy'));

const Sell = lazy(() => import('~/pages/cardSell/CardSell'));

const PlayPage = lazy(() => import('~/pages/playPage/PlayPage'));

type CustomRouteObject = RouteObject & { protected: boolean };

export const rootRoutes: CustomRouteObject[] = [
  {
    path: '/login',
    element: <Login />,
    protected: false,
  },
  {
    path: '/',
    element: <Dashboard />,
    protected: true,
  },
];

export const buyRoutes: CustomRouteObject[] = [
  {
    path: '/buy',
    element: <Buy />,
    protected: true,
  },
];

export const sellRoutes: CustomRouteObject[] = [
  {
    path: '/sell',
    element: <Sell />,
    protected: true,
  },
];

export const playRoutes: CustomRouteObject[] = [
  {
    path: '/play',
    element: <PlayPage />,
    protected: true,
  },
];

export const routes: CustomRouteObject[] = [
  ...rootRoutes,
  ...buyRoutes,
  ...sellRoutes,
  ...playRoutes,
];
