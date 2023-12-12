import { ReactNode } from 'react';
import { useLocation } from 'react-router';
import { Header } from '../header/Header';
import { pagesWithoutLayout } from '../../core/navigation';

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
