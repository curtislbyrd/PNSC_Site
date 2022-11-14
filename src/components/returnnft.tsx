// React Imports
import React, { useEffect, useState } from 'react';

import {
  Box,
  Image,
  Center,
} from '@chakra-ui/react';

// Solana Imports
import { getParsedNftAccountsByOwner } from '@nfteyez/sol-rayz';
import { Connection } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import axios from 'axios';

// CSS Imports
require('@solana/wallet-adapter-react-ui/styles.css');

export const NFTs = (props: any) => {
  const [nftData, setNftData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { publicKey } = useWallet();
  const connection = new Connection("https://solana-api.projectserum.com", "confirmed");

  const getAllNFTs = async () => {
    try {
      const nfts = await getParsedNftAccountsByOwner({
        publicAddress: publicKey,
        connection: connection,
        serialization: true,
      });

      return nfts.filter((obj) => {
        return obj['data']['symbol'] == "PNSCHR" || obj['data']['symbol'] == "HJ";
      });
    } catch (error) {
      console.log("Error thrown, while fetching NFTs", error.message);
    }
  };

  //Function to get all nft data
  const getNftTokenData = async () => {
    try {
      let nftData = await getAllNFTs();
      var data = Object.keys(nftData).map((key) => nftData[key]);
      let arr = [];
      let n = data.length;
      for (let i = 0; i < n; i++) {
        //console.log(data[i]);
        let val = await axios.get(data[i].data.uri);
        arr.push(val);
      }
      return arr;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function data() {
      let res = await getNftTokenData();
      setNftData(res);
      setLoading(true);
    }
    data();
  }, []);

  const [selNft, setSelNft] = useState();

  useEffect(() => {
    //console.log(props.nft);
    setSelNft(props.nft);
  }, [props.nft]);


  async function updateNFT(coll) {
    props.updateNft(coll);
  }

  return (
    <>
      {nftData && nftData.length > 0 && nftData.filter(nfti => nfti.data.symbol == props.sym).map((nfti, ind) => {
        return (
          <Box
            alignItems='baseline'
            key={ind}
            minW={0}
            borderRadius='lg'
            onClick={event => updateNFT(nfti)}
          >
            <Box
              borderRadius='md'>
              <Image
                src={nfti.data.image}
                alt="loading..."
                borderRadius='md'
                objectFit='cover'
              />
              <Center>
                <p>
                  {nfti.data.name}
                </p>
              </Center>
            </Box>
          </Box>
        )
      })}
    </>
  );
}