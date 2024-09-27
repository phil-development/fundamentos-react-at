import { CustomThemeProvider } from './context';

import GlobalStyle from './styles/global';

import AppRoutes from './routes';

export default function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <AppRoutes />
    </CustomThemeProvider>
  );
};