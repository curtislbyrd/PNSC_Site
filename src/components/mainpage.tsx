import type { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import container from '../styles/mainpage.module.css';

import HR from '../assets/img/HRLeftBottom.png'
import discord from '../assets/img/whiteDiscord.png';

export const MainContent: NextPage = () => {
  return (
    <>
      <main className={container.container}>
        <div className={container.topcontent}>
          <div className={container.whiteText}> Welcome Degens</div>
           <div className={container.smallWhiteText}> The Probably Nothing Social Club (PNSC) is a club developed for degenerates, flippers, noodle fingered meat-space escapees and diamond handed gods. Join us as we try to discover what the fuck is going with reality. Let&quot;s ride the Kali Yuga together and become one with the vibrations of the multi-verse.
             </div>
          <div>
            <Image src={discord} width="60" height="60" alt=""/>
          </div>
        </div>
        <div className={container.bottomleft}>
                    <Image src={HR} />
                  </div>

      </main>

    </>
  );
};
