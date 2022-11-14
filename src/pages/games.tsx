import React, { FC } from 'react';

//CSS
import styles from '../styles/Home.module.css';
import container from '../styles/container.module.css';

//Components
import { Footer } from '../components/footer/chakrafooter';
import { Header } from '../components/header/header';
import { MergeContent } from '../components/mergecontent';
import { MainContent } from '../components/maincontent';


const Games: FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Games
        </h1>
        <br></br>
      </main>
      <Footer />
    </>
  );
};

export default Games;
