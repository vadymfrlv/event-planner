import styled from 'styled-components';

interface TitleProps {
  $isHomePage?: boolean;
}

export const PageTitleStyled = styled.h1<TitleProps>`
  display: ${p => (p.$isHomePage ? 'none' : 'block')};

  margin-top: 25px;
  margin-right: auto;

  font-family: Poppins;
  font-weight: 600;
  font-size: 24px;

  color: #3f3f3f;

  @media (min-width: ${p => p.theme.screens.tab}) {
    display: block;
    font-size: 32px;
  }

  @media (min-width: ${p => p.theme.screens.note}) {
    margin-top: 0;
    order: -1;
  }
`;
