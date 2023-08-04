import { ResponsiveBox } from 'components/Box/Box.jsx';

import { HeaderStyled, LogoLinkStyled } from './Header.styled';
import { LanguageSelector } from 'components/LanguageSelector/LanguageSelector';

export const Header = () => {
  return (
    <HeaderStyled>
      <ResponsiveBox display="flex" alignItems="center" justifyContent="space-between">
        <LogoLinkStyled to={'/'}>Event Planner</LogoLinkStyled>
        <LanguageSelector />
        {/* //TODO <SearchBox /> */}
      </ResponsiveBox>
    </HeaderStyled>
  );
};
