import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

import {
  Button,
  Flex,
  Image,
  Text,
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
  Center,
} from '@chakra-ui/react';

import { FinishModal } from './finishmodal'
import { CTAButton } from '../candy/MintButton'
//styles
import container from '../../styles/modal.module.css';

//images
//import mergeButton from '../../assets/img/mergeButton.png';
//import hj from '../../assets/img/hj.png';
//import hr from '../../assets/img/hr.png';


export function SHRModal(NftData) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  //console.log(`This is the NFT Data: ${JSON.stringify(NftData)}`);

  if ((!NftData['HJData']['image']) || (!NftData['HRData']['image']) ) {
    return (
      <Flex justify="center" align="center">
        <Button
          colorScheme='black'
          size='lg'
          height='100x'
          width='250px'
        >
          SELECT SOME THINGS!
        </Button>
      </Flex>
    )
  }

  return (
    <>
      <Flex justify="center" align="center">
        <Button
          colorScheme='green'
          size='lg'
          height='100x'
          width='250px'
          onClick={onOpen}
        >
          START THE MERGE
        </Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size='lg'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>These are your selections:</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

            <SimpleGrid minChildWidth='100px' spacing='1px'>
              <Box
                minW={0}
                borderWidth='1px'
                borderRadius='lg'
                overflow='hidden'
                alignItems='center'>
                <Image
                  src={NftData['HRData']['image']}
                  objectFit='cover' />
                <Center>
                  <p>
                    {NftData['HRData']['name']}
                  </p>
                </Center>
              </Box>
              <Box maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden' alignItems='center'>
                <Image
                  src={NftData['HJData']['image']}
                  objectFit='cover' />
                <Center>
                  <p>
                    {NftData['HJData']['name']}
                  </p>
                </Center>
              </Box>
            </SimpleGrid>
            <br></br>
            <Text fontSize='xs'> Clicking START THE MERGE will allow your High Roller to consume your High Juice and start the reaction to merge into a Super High Roller. Reactions may vary. </Text>

          </ModalBody>
          <ModalFooter>
            <CTAButton />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}