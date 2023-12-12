import { Gamepad2, ShoppingCart, Wallet } from 'lucide-react';

export type NavigationItem = {
  icon: React.ReactNode;
  link: string;
  name: string;
};

export type NavigationItems = Array<NavigationItem>;

export const navigation: NavigationItems = [
  {
    icon: <ShoppingCart />,
    link: '/buy',
    name: 'Buy',
  },
  {
    icon: <Wallet />,
    link: '/sell',
    name: 'Sell',
  },
  {
    icon: <Gamepad2 />,
    link: '/play',
    name: 'Play',
  },
];

export const pagesWithoutLayout = ['/login'];
