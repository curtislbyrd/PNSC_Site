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
  IconButton,
  useDisclosure,
  SimpleGrid,
  Spinner,
  Stack,
  Tooltip,
  Link,
  Box,
  Badge,
  Center,
} from '@chakra-ui/react';



export function SlideLinks() {

  return (

          <>
               <SimpleGrid columns={2} spacing={4}>
              <Box bg='#121212' height='25px' color="white">
                <Link href='https://splnftforum.gitbook.io/pnsc-whitepaper-v1/' isExternal>
                White Paper </Link></Box>
              <Box bg='#121212' height='25px' color="white">
                <Link href='https://diamondvaults.io/vault/PNSC_HR' isExternal>
                  Stake High Roller </Link>
              </Box>
                <Box bg='#121212' height='25px' color="white">
                <Link href='https://diamondvaults.io/vault/High_Juice' isExternal>
                  Stake High Juice </Link>
              </Box>
               <Box bg='#121212' height='25px' color="white">
                <Link href='https://raydium.io/swap/?inputCurrency=sol&outputCurrency=CK5K8GUKSGt5u5aJ7wHfeiCTgWMhcEVgo5zxAQ42msv9&fixed=in' isExternal>
                Swap PNP </Link></Box>
                
              <Box bg='#121212' height='25px' color="white">
                  <Tooltip label='Coming Soon'>
                Benders 
                  </Tooltip>
                <Spinner size='xs'/></Box>
              <Box bg='#121212' height='25px' color="white" href='/rank'>
                <Link href='/rank'>
                  Rarity Tool </Link>
              </Box>
              
              </SimpleGrid>
                </>
  )
};