import React, { FC } from 'react';

//CSS
import styles from '../styles/Home.module.css';
import container from '../styles/container.module.css';

//Components
import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';
import { MergeContent } from '../components/mergecontent';


const Merge: FC = () => {
  return (
    <>
      <Header />
      <MergeContent />
      <Footer />
    </>
  );
};

export default Merge;