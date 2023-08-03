import { Outlet } from 'react-router-dom';

import { BaseBox } from 'components/Box/Box.jsx';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';

export const AppBar = () => {
  return (
    <>
      <Header />
      <BaseBox as="main">
        <Suspense fallback={<div>LOADING</div>}>
          <Outlet />
        </Suspense>
      </BaseBox>
    </>
  );
};
