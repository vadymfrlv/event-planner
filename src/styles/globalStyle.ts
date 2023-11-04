import { createGlobalStyle } from 'styled-components';

import './fonts.css';
import mainBackground from 'assets/images/svg/mainBackground.svg';

export const GlobalStyle = createGlobalStyle`

/* * {
  box-sizing: border-box;
} */

body {
  margin: 0;
  height: 100vh;
  font-family: 'Poppins', 'Alata', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url(${mainBackground});
  background-repeat: no-repeat;
  background-size: auto 420%;
  background-position: top 140px left 40%;
  
  @media (min-width: ${p => p.theme.screens.tab}) {
    background-size: auto 230%;
    background-position: top 80px left 45%;
  }
  
  @media (min-width: ${p => p.theme.screens.desk}) {
    background-size: 130% auto;
    background-position: top 80px left 97%;
  }
}
`;
