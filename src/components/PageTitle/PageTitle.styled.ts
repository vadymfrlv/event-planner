import styled from 'styled-components';

export const PageTitleStyled = styled.h1`
  display: none;

  @media (min-width: ${p => p.theme.screens.tab}) {
    display: block;
    margin-right: auto;

    font-family: Poppins;
    font-weight: 600;
    font-size: 32px;

    color: #3f3f3f;
  }
`;
