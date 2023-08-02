import { Outlet } from 'react-router-dom';

import { BaseBox } from 'components/Box/Box.jsx';
import { Header } from 'components/Header/Header';

export const AppBar = () => {
  return (
    <>
      <Header />
      <BaseBox as="main">
        <Outlet />
      </BaseBox>
    </>
  );
};
