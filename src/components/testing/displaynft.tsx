// React Imports
import React, { FC, useCallback } from 'react';
import ReactDOM from 'react-dom'
import Image from 'next/image';

// Solana Imports
import { Metadata } from "@metaplex-foundation/mpl-token-metadata";
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';


import hr from '../assets/img/hr.png';

// Chakra Imports
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  SimpleGrid,
  Box,
  Badge,
} from '@chakra-ui/react'

// CSS Imports
require('@solana/wallet-adapter-react-ui/styles.css');
import container from '../styles/container.module.css';
import juice from '../styles/juice.module.css';

// Start NFTSuff 
let tokensInWallet: any = [];
let NFTs: any = [];

export const NFTCollection: FC = () => {
  const connection = new Connection("https://solana-api.projectserum.com", "confirmed");

  async function getTheTokensOfOwner(MY_WALLET_ADDRESS: string) {

    (async () => {
      const connection = new Connection("https://solana-api.projectserum.com", "confirmed");
      const accounts = await connection.getParsedProgramAccounts(
        TOKEN_PROGRAM_ID,
        {
          filters: [
            {
              dataSize: 165, // number of bytes
            },
            {
              memcmp: {
                offset: 32, // number of bytes
                bytes: MY_WALLET_ADDRESS, // base58 encoded string
              },
            },
          ],
        }
      );

      console.log(
        `Found ${accounts.length} token account(s) for wallet ${MY_WALLET_ADDRESS}: `
      );

      let totalNFTsI = 0;
      accounts.forEach((account) => {
        // account.account.data;
        // Set amountI and mint_s varables to loop
        //console.log(JSON.stringify(account.account.data));
        let amountI = account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"];
        let mint_s = account.account.data["parsed"]["info"]["mint"];

        if (amountI == 1) {
          totalNFTsI += 1;

          try {
            //console.log(`Mint: ${mint_s}`);
            let objT: any = {};
            objT.mint = mint_s
            objT.amount = amountI
            tokensInWallet.push(objT)

            let token_amount_i = account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"]
          } catch {
            //tokensInWallet.push({mint:mint_s,amount: amountI })
          }
        }

      });

      //console.log("total NFTs: {}", totalNFTsI);

      let nfts_total_element = <span>({totalNFTsI})</span>;

      //ReactDOM.render(nfts_total_element, document.getElementById("totalNFTs"))

      //console.log("tokens: "+tokensInWallet)
      let currentI = 0
      await tokensInWallet.forEach(element => {
        getAccountMetaData(element.mint, element.amount, currentI);
        currentI += 1;
      });

    })();
  }

  async function UpdateTable(nfts) {

    return (
      <>

      </>
    );
  };


  // this function gets account meta data and loads it to 
  async function getAccountMetaData(mintAddress, amountI, numberI) {
    (async () => {
      let mintPubkey = new PublicKey(mintAddress);
      //console.log(mintPubkey);
      let tokenmetaPubkey = await Metadata.getPDA(mintPubkey);

      const tokenmeta: any = await Metadata.load(connection, tokenmetaPubkey);
      //console.log(tokenmeta);

      //This returns the name of the NFT
      //console.log("name: " + tokenmeta.data.data["name"]);

      // Return token meta
      //console.log("tokenMeta: " + JSON.stringify(tokenmeta.data.data));

      //nftsInWallet.push({name: tokenmeta.data.data["name"], uri: tokenmeta.data.data["uri"]})

      tokensInWallet[numberI].name = tokenmeta.data.data["name"];
      tokensInWallet[numberI].uri = tokenmeta.data.data["uri"];
      tokensInWallet[numberI].symbol = tokenmeta.data.data["symbol"];
      //console.log("uri: " + tokenmeta.data.data["uri"]);
      if (tokenmeta.data.data["symbol"] == "PNSCHR" || tokenmeta.data.data["symbol"] == "HJS") {
        await fetch(tokensInWallet[numberI].uri)
          .then((response) => response.json())
          .then((responseJson) => {
            tokensInWallet[numberI].image = responseJson.image
            console.log(JSON.stringify(responseJson));
          })
          .catch((error) => {
            console.error(error);
          });

        NFTs.push(tokensInWallet[numberI]);
        //console.log("PNSC: " + JSON.stringify(tokensInWallet[numberI]));
      };

      //console.log("New NFTs: " + JSON.stringify(tokensInWallet[numberI]));
      //UpdateTheUI(mintAddress, tokenmeta.data.data["uri"], tokenmeta.data.data["name"], numberI)
    })();
  }

  const { publicKey, sendTransaction } = useWallet();

  const onClick = useCallback(async () => {

    if (!publicKey) throw new WalletNotConnectedError();
    connection.getBalance(publicKey).then((bal) => {
      //console.log(bal / LAMPORTS_PER_SOL);
    });

    getTheTokensOfOwner(publicKey.toBase58());

  }, [publicKey, sendTransaction, connection]);

  /*
  function NftListItem({ nft }) {

    return (
      <Box key={nft.mint} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' alignItems='center'>
        <Image src={nft.image} />
        <Badge as='span' fontSize='sm'>
          {nft.name}
        </Badge>
      </Box>
    )
  };
  */


  // This returns all info in HTML
  return (
    <>
        <h1>Start Map <span id='totalNFTs'></span></h1>
          {NFTs.map((nft) => {
            return (
              <Box key={nft["mint"]} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' alignItems='center'>
                <Image src={nft["image"]} />
                <Badge as='span' fontSize='sm'>
                  {nft["name"]}
                </Badge>
              </Box>
            );
          })}

      <h1>End Map <span id='totalNFTs'></span></h1>

    </>
  );
};
export function getTheTokensOfOwner();


      const tokenData = await Promise.all(
        accounts.map(async (account: any) => {
          if (account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"] == 1) {
            let mintPubKey = new PublicKey(account.account.data["parsed"]["info"]["mint"]);
            let tokenMetaPubKey = await Metadata.getPDA(mintPubKey);

            const tokenMeta: any = await Metadata.load(connection, tokenMetaPubKey);
            console.log(`tokenMeta: ${JSON.stringify(tokenMeta.data.data)}`)
            return tokenMeta.data.data;
          }
        })
      );