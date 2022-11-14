import React, { FC } from 'react';
import Image from 'next/image';
import container from '../../styles/header.module.css';

//images
import ME from '../../assets/img/whiteME.png';
import discord from '../../assets/img/whiteDiscord.png';
import twitter from '../../assets/img/whiteTwitter.png';

// this footer sucks.. I need to redo this
export const IconsTable: FC = props => {
  return (
    <>
      <div className={container.iconsTable}>
        <a href="https://magiceden.io/creators/probably_nothing_social_club" target="_blank" rel="noreferrer">
          <Image src={ME} width="60" height="60" alt=""/>
        </a>
        <a href="https://discord.com/invite/ybtD4MCuHb" target="_blank" rel="noreferrer">
          <Image src={discord} width="60" height="60" alt=""/>
        </a>
        <a href="https://twitter.com/pnsc420" target="_blank" rel="noreferrer">
          <Image src={twitter} width="60" height="60" alt=""/>
        </a>
      </div>
    </>
  )
};
