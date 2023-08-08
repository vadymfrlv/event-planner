import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.ts';

import { App } from './App.tsx';

import 'styles/reset.css';
import { theme } from 'utils/theme';
import { GlobalStyle } from 'styles/globalStyle.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <StyleSheetManager shouldForwardProp={isPropValid}>
            <GlobalStyle />
            <App />
          </StyleSheetManager>
        </ThemeProvider>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
