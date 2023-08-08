import { createGlobalStyle } from 'styled-components';

import './fonts.css';

export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  font-family: 'Poppins', 'Alata', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
