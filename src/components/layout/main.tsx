import { ReactNode } from 'react';

import { useLocation } from 'react-router';

import { pagesWithoutLayout } from '../../core/navigation';
import { Header } from '../header/Header';

const Main = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const isWithLayout = !pagesWithoutLayout.some((path) => location.pathname.includes(path));

  return (
    <>
      {isWithLayout && (
        <>
          <Header />
        </>
      )}
      <main>{children}</main>
    </>
  );
};

export default Main;
