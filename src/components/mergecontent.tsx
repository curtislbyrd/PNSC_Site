import React, { useEffect, useState, } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useWallet } from '@solana/wallet-adapter-react';
import { NFTDisplayModal } from '../components/modal/nftdisplaymodal'
import { SHRModal } from '../components/modal/shrmodal'


//css
import container from '../styles/merge.module.css';


export const MergeContent: NextPage = () => {
  const [parNft, setParNft] = useState({});
  const [HJData, setHJData] = useState({});
  const [HRData, setHRData] = useState({});

  const updateNft = (nft: any) => {
    //console.log(`NFT data: ${JSON.stringify(nft)}`);
    setParNft(nft);
    // Call function to add selected nft to obj
  }

  useEffect(() => {
    //console.log(`parNft: ${JSON.stringify(parNft)}`);
  
let parNft: any = {}
    
    if (parNft.data) {
      if (parNft.data.symbol == "PNSCHR") {
        setHRData(parNft['data']);

      } else if (parNft.data.symbol == "HJ") {
        setHJData(parNft['data']);
      } else if (parNft.data.symbol == "") {
        console.log("Error passing selected NFT")
      }
    }
  }, [parNft]);


  const hr = {
    sym: "PNSCHR",
    title: "High Roller"
  };

  const hj = {
    sym: "HJ",
    title: "$High Juice"
  };

  return (

    <>
      <div className={container.container}>

        <div className={container.center}><h1 className={container.bigWhiteText}>Phase 3 Trials!</h1></div>
        <div className={container.list}>
          <div className={container.nftHolder}>
            <h2 className={container.heading}>Step 1</h2>
            <h3 className={container.whiteText}>Select {hr.title}</h3><br></br>
            <div className={container.select}>
              <NFTDisplayModal {...hr} nft={parNft} updateNft={updateNft} HData={HRData} />
            </div>
          </div>
          <div className={container.nftHolder}>
            <h2 className={container.heading}>Step 2</h2>
            <h3 className={container.whiteText}>Select {hj.title}</h3><br></br>
            <div className={container.select}>
              <NFTDisplayModal {...hj} nft={parNft} updateNft={updateNft} HData={HJData} />
            </div>
          </div>
        </div>      <br></br>
        <div className={container.nftHolder}>
          <h2 className={container.heading}>Step 3</h2>
          <SHRModal HJData={HJData} HRData={HRData} />
        </div>
      </div>
    </>
  );
};
