import styled from 'styled-components';

import mainBackground from '../../assets/images/svg/mainBackground.svg';

export const MainStyled = styled.main`
  min-height: 100vh;
  padding-top: 40px;
  padding-bottom: 42px;
  background-image: url(${mainBackground});
  background-repeat: no-repeat;
  /* background-size: 1494px 1639px; */
  background-position: top -3px left 35%;

  @media (min-width: ${p => p.theme.screens.tab}) {
    padding-bottom: 125px;
    background-position: top -3px left 40%;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    padding-top: 60px;
    padding-bottom: 77px;
    background-position: top -3px left 97%;
  }
`;

// export const MainStyled = styled.main`
//   position: relative;
//   height: 100vh;
//   padding-top: 40px;
//   padding-bottom: 42px;
//   /* overflow: hidden; */
//   z-index: 5;

//   @media (min-width: ${p => p.theme.screens.tab}) {
//     padding-bottom: 125px;
//   }

//   @media (min-width: ${p => p.theme.screens.desk}) {
//     padding-top: 60px;
//     padding-bottom: 77px;
//   }

//   &::before {
//     content: '';
//     position: absolute;
//     top: -3px;
//     left: -30px;
//     min-height: 180%;
//     min-width: 180%;
//     background-image: url(${mainBackground});
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: top -3px left 45%;
//   }
// `;
