import styled from 'styled-components';

export const MainStyled = styled.main`
  padding-top: 40px;
  padding-bottom: 42px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    padding-bottom: 125px;
  }

  @media (min-width: ${p => p.theme.screens.note}) {
    padding-top: 60px;
    padding-bottom: 77px;
  }
`;
