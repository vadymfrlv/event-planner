import { ResponsiveBox } from 'components/Box/Box.jsx';

import { StyledHeader, Logo } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <ResponsiveBox>
        <Logo>Event Planner</Logo>
      </ResponsiveBox>
    </StyledHeader>
  );
};
