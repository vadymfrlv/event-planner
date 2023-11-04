import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar } from 'components/AppBar/AppBar';
import { ResponsiveBox } from 'components/Box/Box.jsx';

import { MainStyled } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <AppBar />

      <MainStyled>
        <ResponsiveBox>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </ResponsiveBox>
      </MainStyled>
    </>
  );
};
