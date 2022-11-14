import React, { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  SimpleGrid
} from '@chakra-ui/react';

import { NFTs } from '../returnnft';


//styles
import container from '../../styles/modal.module.css';

//images
import hr from '../../assets/img/hr.png';

export function NFTDisplayModal(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { publicKey } = useWallet();

  //console.log(`props: ${JSON.stringify(props)}`);

  if (props.HData.image) {
    //console.log(JSON.stringify(props));
    return (
      <>
        <Flex minWidth='max-content' alignItems='center'>
          <Box
            color='white'
            boxSize='sm'
            onClick={onOpen}
          >
            <Image
              src={props.HData.image}
              alt="Already Selected"
              alignItems='center'
              borderRadius='lg'
              objectFit='cover'
            />
            {props.HData.name}
          </Box>
        </Flex>

        <Modal isOpen={isOpen} onClose={onClose} size='xl'>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Select a {props.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <SimpleGrid onClick={onClose} minChildWidth='140px' spacing='10px'>
                <NFTs {...props} />
              </SimpleGrid>
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  return (
    <>
      {publicKey ? (
        <Button
          colorScheme='white'
          boxSize='sm'
          onClick={onOpen}
        >
          Select {props.title}
        </Button>
      ) : (
        <Button
          colorScheme='white'
          boxSize='sm'
        >
          Connect a wallet
        </Button>
      )}
      <Modal isOpen={isOpen} onClose={onClose} size='xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select a {props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid onClick={onClose} columns={2} spacing={2}>
              <NFTs {...props} />
            </SimpleGrid>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}