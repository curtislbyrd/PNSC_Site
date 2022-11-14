import React, { useState, useRef } from 'react';
import axios, {AxiosResponse} from 'arbundles/node_modules/axios';
import { useWallet } from '@solana/wallet-adapter-react';
import {
  Box,
  Button,
  InputGroup,
  InputRightElement,
  NumberInput,
  NumberInputField
  
} from '@chakra-ui/react';


export function RankSearch() {

  // Get NFT Lookup Number
  const [value, setValue] = useState(100)
  const nftID = useRef(null);

  const handleClick = () => {
    setValue(+nftID.current.value);
  };

  // Gets JSON file and drills down to items
  const data = JSONFile;
  const HRArray = data.result.data.items;
  //console.log(JSONFile)

  // selected array where object = ?
  const selected = HRArray.find((obj) => {
    return obj.id == value;
  });

  // results = object with name and value of Attributes
  const attributes = selected?.attributes
  const attresults = attributes.map(({ name, value, rarity }) => ({
    name,
    value,
    rarity
  }));
  
  return (
        <>
     <InputGroup >
        <NumberInput size='md' width='385px' min={1} max={1200}>
          <NumberInputField
          ref={nftID}
          pr='4.5rem'
          placeholder='Search High Roller'
          color='white'
          name="High Roller"
          />
        
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            Search
          </Button>
        </InputRightElement>
          </NumberInput>
      </InputGroup>
            </>
    
  )
};