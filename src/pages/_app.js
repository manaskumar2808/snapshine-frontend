import '@/styles/globals.css';
import { APP_THEME } from '@/constants/Theme';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-resizable/css/styles.css';
import 'react-image-crop/dist/ReactCrop.css';
import { wrapper } from '../store';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={APP_THEME}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(App);