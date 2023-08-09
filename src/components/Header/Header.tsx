import { ResponsiveBox } from 'components/Box/Box.jsx';
import { LanguageSelector } from 'components/LanguageSelector/LanguageSelector';
import { SearchBox } from 'components/SearchBox/SearchBox';

import { HeaderStyled, LogoLinkStyled, Wrapper } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <ResponsiveBox display="flex" alignItems="center" justifyContent="space-between">
        <Wrapper>
          <LogoLinkStyled to={'/'}>Event Planner</LogoLinkStyled>
          <SearchBox />
          <LanguageSelector />
        </Wrapper>
      </ResponsiveBox>
    </HeaderStyled>
  );
};
