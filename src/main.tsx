import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

import { App } from './App.tsx';

import { theme } from 'utils/theme';
import { GlobalStyle } from 'styles/fonts.ts';
import 'styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <StyleSheetManager shouldForwardProp={isPropValid}>
          <GlobalStyle />
          <App />
        </StyleSheetManager>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
