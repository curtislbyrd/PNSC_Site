import type { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import container from '../styles/benders.module.css';

import { Button } from '@chakra-ui/react';

import HR from '../assets/img/HRLeftBottom.png'
import discord from '../assets/img/whiteDiscord.png';

export const BendersPage: NextPage = () => {
  return (
    <>
      <main className={container.container}>
        <div className={container.topcontent}>
          <div className={container.whiteText}> Benders</div>
           <div className={container.smallWhiteText}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           </div>
          <div>
            <Button variant='outline'>
            <Image src={discord} width="60" height="60" alt=""/> 
            </Button>
          </div>
        </div>
      </main>

    </>
  );
};
