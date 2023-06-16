import '@/styles/globals.css';
import { getAppTheme } from '@/constants/Theme';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-resizable/css/styles.css';
import 'react-image-crop/dist/ReactCrop.css';
import 'react-color-picker/index.css'
import { wrapper } from '../store';

const App = ({ Component, pageProps }) => {
  const dark = true;

  return (
    <ThemeProvider theme={getAppTheme(dark)}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(App);