import type { AppProps } from 'next/app';
import { FC } from 'react';
import { ContextProvider } from '../contexts/ContextProvider';
import { ChakraProvider } from '@chakra-ui/react';

// Use require instead of import since order matters
require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');

const App: FC<AppProps> = ({ Component, pageProps }) => {

  return (
    <>
      <ContextProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ContextProvider>
    </>
  );
};

export default App;
