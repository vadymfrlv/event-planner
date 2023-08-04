import styled from 'styled-components';

import mainBackground from '../../assets/images/svg/mainBackground.svg';

export const MainStyled = styled.main`
  height: 100vh;
  padding-top: 40px;
  padding-bottom: 42px;
  background-image: url(${mainBackground});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: -80px -3px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    padding-bottom: 125px;
    background-position: 40px -3px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    padding-top: 60px;
    padding-bottom: 77px;
    background-position: 0 -3px;
  }
`;
