import { BaseBox, ResponsiveBox } from 'components/Box/Box.jsx';
import { LanguageSelector } from 'components/LanguageSelector/LanguageSelector';
import { SearchBox } from 'components/SearchBox/SearchBox';

import { HeaderStyled, LogoLinkStyled } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <ResponsiveBox display="flex" alignItems="center" justifyContent="space-between">
        <LogoLinkStyled to={'/'}>Event Planner</LogoLinkStyled>
        <BaseBox display="flex" alignItems="center">
          <SearchBox />
          <LanguageSelector />
        </BaseBox>
      </ResponsiveBox>
    </HeaderStyled>
  );
};
