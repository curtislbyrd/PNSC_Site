import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import juice from '../styles/juice.module.css';
import container from '../styles/container.module.css';

//images
import hjDude from '../assets/img/hjDude.png';
import hrDude from '../assets/img/hrDude.png';
import shrDude from '../assets/img/shrDude.png';
import pnp from '../assets/img/pnp.png';

export const MainContent: NextPage = () => {
  return (
    <>
      <div className={juice.container}>
        <div className={juice.sectioncontainer}>
          <div className={juice.itemcontainer}>
            <div className={juice.mainText}>
              <h1>CAN YOU PASS THE JUICE TEST?</h1>
            </div>
            <div className={juice.Oswald}>
              <h2>Phase 3 Trials go live end of September</h2>
            </div>
            <div className={juice.Oswald}>
              <h2>The High Juice Company Limited invites you to participate in Phase 3 Trials. Can you pass the juice test?</h2>
            </div>
            <div className={juice.Oswald}>
              <h3>The High Company Limited has reached the final stage of subject testing before the ground breaking High Juice formula is launched to the public. If you are brave enough to participate in the final subject testing stage, follow the steps below.</h3>
            </div>
            <br></br>
          </div>
          <div className={juice.itemcontainer}>
            <h1 className={juice.OswaldGreen}>STEP 1: BUY A HIGH ROLLER</h1>
            <h3 className={juice.OswaldGreen}>You need at least 1x High Roller and 1x High Juice in order to complete the phase 3 trials.</h3>
            <div className={juice.stepOneTable}>
              <div className={juice.buyButton}>
                <a target='_blank' href="https://magiceden.io/marketplace/pnschrs" className={juice.buyButton}>BUY A HIGH ROLLER</a>
              </div>
              <div className={juice.buyButton}>
                <a target='_blank' href="https://magiceden.io/marketplace/hjc" className={juice.buyButton}>BUY SOME JUICE</a>
              </div>
            </div>
            <div className={juice.stepOneTable}>
              <div className={juice.greenGlow}>
                <Image src={hrDude} />
              </div>
              <div className={juice.greenGlow}>
                <Image src={hjDude} />
              </div>
            </div>
            <div className={juice.itemcontainer}>
              <div className={juice.itemcontainer}>
                <h1 className={juice.OswaldGreen}>STEP 2: BUY SOME $PNP</h1>
                <h3 className={juice.OswaldGreen}>You will need at least 5,000 $PNP to complete phase 3 trials.</h3>
                <a target='_blank' href="https://famousfoxes.com/tokenmarket" className={juice.buyButton}>BUY SOME $PNP</a>
              </div>
              <br></br>
              <br></br>
              <div className={juice.greenGlow}>
                <Image src={pnp} />
              </div>
              <br></br>
              <br></br>
              <h1 className={juice.OswaldGreen}>STEP 3: BEGIN PHASE 3 TRIALS</h1>
              <h3 className={juice.OswaldGreen}>Can you pass the juice test?</h3>
              <div className={juice.greenGlow}>
                <Image src={shrDude} />
                <br></br><br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};