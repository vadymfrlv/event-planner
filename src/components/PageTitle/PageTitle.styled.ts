import styled from 'styled-components';

export const PageTitleStyled = styled.h1`
  display: none;

  margin-right: auto;

  font-family: Poppins;
  font-weight: 600;
  font-size: 32px;

  color: #3f3f3f;

  @media (min-width: ${p => p.theme.screens.tab}) {
    display: block;
    margin-top: 40px;
  }

  @media (min-width: ${p => p.theme.screens.note}) {
    display: block;
    margin-top: 0;
    order: -1;
  }
`;
