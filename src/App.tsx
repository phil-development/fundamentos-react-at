import { CustomThemeProvider } from './context';

import GlobalStyle from './styles/global';

import Routes from './routes';

export default function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <Routes />
    </CustomThemeProvider>
  );
};