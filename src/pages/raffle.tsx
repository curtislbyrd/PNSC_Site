import React, { FC } from 'react';

//CSS
import styles from '../styles/Home.module.css';
import container from '../styles/container.module.css';

//Components
import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';
import Home from '../components/candy/Home';


const Raffle: FC = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default Raffle;
