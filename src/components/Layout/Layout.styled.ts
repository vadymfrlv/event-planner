import styled from 'styled-components';

import mainBackground from '../../assets/images/svg/mainBackground.svg';

export const MainStyled = styled.main`
  min-height: 100vh;
  padding-top: 40px;
  padding-bottom: 42px;
  background-image: url(${mainBackground});
  background-repeat: no-repeat;
  background-position: top -3px left 35%;

  @media (min-width: ${p => p.theme.screens.tab}) {
    padding-bottom: 125px;
    background-position: top -3px left 40%;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    padding-top: 60px;
    padding-bottom: 77px;
    background-size: 130% auto;
    background-position: top -3px left 97%;
  }
`;
