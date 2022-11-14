import React from 'react';
import { FaGithub, FaDiscord, FaTwitter } from 'react-icons/fa'

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
  Stack,
  Link,
  Box,
  Badge,
  Center,
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons'
import { IconsTable } from '../header/icons'
import { SlideFAQ } from './slidefaq'
import { SlideLinks } from './slidelinks'


export function Slide() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        size='lg'
        colorScheme='black'
        aria-label='Hamburger Menu'
        icon={<HamburgerIcon />}
        onClick={onOpen}>
      </IconButton>
      
      <Drawer placement='right' onClose={onClose} isOpen={isOpen} size='lg'>
        <DrawerOverlay color="#121212" />
        <DrawerContent bgColor='#121212'>
          <DrawerCloseButton color="white" />
          <DrawerHeader borderBottomWidth='0px' color='#121212'>
          <IconsTable />
          </DrawerHeader>
          
          <DrawerBody bgColor='blackAlpha.300'>
              <SlideLinks />
               <SlideFAQ />
              
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
};