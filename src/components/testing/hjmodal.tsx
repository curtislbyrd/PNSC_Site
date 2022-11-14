import React from 'react';
import Image from 'next/image';
import { useWallet } from '@solana/wallet-adapter-react';
import { NFTs } from '../returnnft';
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

import container from '../../styles/modal.module.css';

//images
import hj from '../../assets/img/hj.png';

export function HJModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { publicKey } = useWallet();

    const props = {
    sym: "HJS",
  };

  return (
    <>
      <Button
        colorScheme='white'
        size='lg'
        height='400px'
        width='400px'
        onClick={onOpen}
      >
        Select High Juice
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size='xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select a High Juice</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <SimpleGrid minChildWidth='150px' spacing='30px'>
                <NFTs {...sym} />
              </SimpleGrid>
            </div>
          </ModalBody>

          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}