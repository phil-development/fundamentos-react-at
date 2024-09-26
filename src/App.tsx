import { useState } from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

import Routes from './routes';

export default function App() {

  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};