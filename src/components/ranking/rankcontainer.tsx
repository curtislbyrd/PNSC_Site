import React, { useEffect, useState, useRef, ChangeEvent, createContext, useContext } from 'react';
import axios, { AxiosResponse } from 'arbundles/node_modules/axios';
import { useWallet } from '@solana/wallet-adapter-react';
import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  SimpleGrid,
  Text,
  NumberInput,
  NumberInputField
} from '@chakra-ui/react';



//images
import hr from '../../assets/img/hr.png';

export interface HRAttData {
  id: number;
  imageUrl: string;
  rareUrl: string;
  background: string;
  body: string;
  clothes: string;
  facialacc: string;
  head: string;
  handitem: string;
  hand: string;
  intelligence: string;
  attrare: string;
  mintID: string;
}

import JSONFile1 from '../testing/hr.json'
import JSONFile from '../testing/pnsc.json'


export function RankContainer() {

  // Gets JSON file and drills down to items
  const data = JSONFile
  const HRArray = data.result.data.items
  console.log(JSONFile)

  // Get NFT Lookup Number
  const [value, setValue] = useState(100)
  const nftID = useRef(null);

  const handleClick = () => {
    setValue(+nftID.current.value);
  };

  // selected array where object = ?
  const selected = HRArray.find((obj) => {
    return obj.id == value;
  });

  // Pull out mint id number and store into mintID
  const mintID = selected?.mint

  // results = object with name and value of Attributes
  const attributes = selected?.attributes
  const attresults = attributes.map(({ name, value, rarity }) => ({
    name,
    value,
    rarity
  }));
  console.log(mintID)

  //console.log(attresults)

  //var Background = attributes.find(item => item.id === 1);
  //console.log(Background)

  //Final Attribute Data
  const HRData = {
    imageUrl: selected?.image,
    background: attresults[1].value,
    body: attresults[2].value,
    clothes: attresults[3].value,
    facialacc: attresults[4].value,
    head: attresults[5].value,
    handitem: attresults[6].value,
    hand: attresults[7].value,
    intelligence: attresults[8].value,
    rare: selected?.all_ranks['howrare.is'],
    attrare: attresults[8].rarity,
    image: selected?.image,
    mintID: selected?.mint
  }


  return (
    <>
      <Flex flexDirection='column' alignItems='center'>
      <InputGroup flexDirection='column' alignItems='center'>
        <NumberInput size='md' width='385px' min={1} max={1200}>
          <NumberInputField
            ref={nftID}
            pr='4.5rem'
            placeholder='Search High Roller'
            color='white'
            name="High Roller"
          />

          <InputRightElement width='5.2rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
              Search
            </Button>
          </InputRightElement>
        </NumberInput>
      </InputGroup>
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Flex flexDirection='column' alignItems='center'>
        <Box color='white' fontSize='xl'>
              PNSC HIGH ROLLER {value}
            </Box>
        <Box as='span' color='gray.600' fontSize='md' fontFamily='mono' color='white'>
            HowRare.is Rank: {HRData.rare}
          </Box>
      </Flex>
        <Image src={HRData.imageUrl} alt={HRData.background} />

        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
          </Box>
          <Box
            color='white'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            fontFamily='mono'
          >
            <Button colorScheme='white' variant='outline' size='xs'>Background:{HRData.background}</Button><br></br>
            <Button colorScheme='white' variant='outline' size='xs'>Body:{HRData.body}</Button><br></br>
            <Button colorScheme='white' variant='outline' size='xs'>Clothes:{HRData.clothes}</Button><br></br>
            <Button colorScheme='white' variant='outline' size='xs'>Facial Accessories:{HRData.facialacc}</Button><br></br>
            <Button colorScheme='white' variant='outline' size='xs'>Head:{HRData.head}</Button><br></br>
            <Button colorScheme='white' variant='outline' size='xs'>Hand Item:{HRData.handitem}</Button><br></br>
            <Button colorScheme='white' variant='outline' size='xs'>Hand:{HRData.hand}</Button><br></br>
            <Button colorScheme='white' variant='outline' size='xs'>Intelligence:{HRData.intelligence}</Button><br></br>

          </Box>
          
        </Box>
      </Box>
</Flex>
    </>



  )
}