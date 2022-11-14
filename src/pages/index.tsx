import React, { FC } from 'react';

//Components
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/chakrafooter';
import { MainContent } from '../components/mainpage';

import { ChakraProvider } from '@chakra-ui/react';

const Home: FC = () => {
  return (
    <>
      <Header />
      <div>
        <MainContent />
      </div>
    </>
  );
};

export default Home;
