import { Outlet } from 'react-router-dom';

import { Box } from 'components/Box/Box.jsx';
import { Header } from 'components/Header/Header';

export const AppBar = () => {
  return (
    <Box>
      <Header />
      <Box padding="0 30px">
        <Outlet />
      </Box>
    </Box>
  );
};
