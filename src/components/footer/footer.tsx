import React, { FC } from 'react';
import Image from 'next/image';
import container from '../../styles/container.module.css';

//images
import ME from '../../assets/img/whiteME.png';
import discord from '../../assets/img/whiteDiscord.png';
import twitter from '../../assets/img/whiteTwitter.png';

// this footer sucks.. I need to redo this
export const Footer: FC = props => {
  return (
    <>
      <footer>
      <br></br>
      <br></br>
      <div className={container.footer}>
        <a href="https://magiceden.io/creators/probably_nothing_social_club" target="_blank" rel="noreferrer">
          <Image src={ME} width="40" height="40" alt=""/>
        </a>
        <a href="https://discord.com/invite/ybtD4MCuHb" target="_blank" rel="noreferrer">
          <Image src={discord} width="40" height="40" alt=""/>
        </a>
        <a href="https://twitter.com/pnsc420" target="_blank" rel="noreferrer">
          <Image src={twitter} width="40" height="40" alt=""/>
        </a>
      </div>
    </footer>
    </>
  )
};
