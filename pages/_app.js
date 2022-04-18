import { ChakraProvider, extendTheme } from '@chakra-ui/react';

//local imports
import '../styles/globals.css';

const breakpoints = {
  xs: '300px',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px'
};

const theme = extendTheme({ breakpoints });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
