import '@/styles/globals.css';
import { APP_THEME } from '@/constants/Theme';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={APP_THEME}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}