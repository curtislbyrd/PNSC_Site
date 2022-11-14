import React from 'react';

import {
  Button,
  ButtonGroup,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Text,
  IconButton,
  useDisclosure,
  SimpleGrid,
  Stack,
  Link,
  Box,
  Badge,
  Center,
} from '@chakra-ui/react';



export function SlideFAQ() {

  return (

          <>
                <br></br>
                <Text color='white'> FAQ: </Text>
                <SimpleGrid columns={1} spacing={2}>
                    <Popover>
                      <PopoverTrigger>
                        <Button colorScheme='white' color='white' variant='outline'>Why should I join PNSC?</Button>
                      </PopoverTrigger>
                      <PopoverContent color='black'>
                        <PopoverBody bg='white'>Why the hell not? Need more here** fsdfsd afsdf sdfsdf sadfsdfsdf</PopoverBody>
                      </PopoverContent>
                    </Popover>
                  <Popover>
                      <PopoverTrigger>
                        <Button colorScheme='white' color='white' variant='outline'>What is $PNP?</Button>
                      </PopoverTrigger>
                      <PopoverContent bg='black'>
                        <PopoverBody bg='white'>$PNP (Probably Nothing Potion) is our native utility token. PNSC NFT holders earn $PNP by staking their NFTs. $PNP can be used to redeem Solana from the upcoming paper         scissors rock gambling game, and for purchasing tickets in for the Probably Nothing Raffle.</PopoverBody>
                      </PopoverContent>
                    </Popover>
                   <Popover>
                      <PopoverTrigger>
                        <Button colorScheme='white' color='white' variant='outline'>What do I get if I own a PNSC NFT?</Button>
                      </PopoverTrigger>
                      <PopoverContent bg='black'>
                        <PopoverBody bg='white'>First off, you are a part of an awesome community. At PNSC our community is our number one utility and we strive to provide our community with new tools and technology to provide value to our owners.</PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </SimpleGrid>
                </>
  )
};