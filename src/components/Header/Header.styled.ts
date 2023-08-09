import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  padding: 24px 0;

  background-color: ${p => p.theme.colors.background};
  border-bottom: ${p => p.theme.borders.header};

  @media (min-width: ${p => p.theme.screens.tab}) {
    padding: 22px 0;
  }
`;

export const LogoLinkStyled = styled(Link)`
  font-family: ${p => p.theme.fonts.logo};
  font-size: ${p => p.theme.fontSizes[0]}px;
  margin-right: auto;

  color: ${p => p.theme.colors.accent};
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;

  @media (min-width: ${p => p.theme.screens.tab}) {
    flex-wrap: nowrap;
  }
`;
