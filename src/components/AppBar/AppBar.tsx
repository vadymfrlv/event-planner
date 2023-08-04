import { Outlet } from 'react-router-dom';

import { BaseBox } from 'components/Box/Box.jsx';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

export const AppBar = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <BaseBox as="main">
          <Outlet />
        </BaseBox>
      </Suspense>
    </>
  );
};
