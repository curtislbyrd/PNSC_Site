import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';

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
import { Metaplex, keypairIdentity, bundlrStorage } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl, Keypair } from "@solana/web3.js";


//styles
import container from '../../styles/modal.module.css';

const connection = new Connection(clusterApiUrl("devnet"));
const wallet = Keypair.generate();

const metaplex = Metaplex.make(connection)
  .use(keypairIdentity(wallet))
  .use(bundlrStorage());

const candyMachine = metaplex
  .candyMachines()
  .findByAddress({ address: new PublicKey("8rvktyBpz9CYhLD9yHBnvDDqEvdKtjvbZQPzaTgih21m") });



export function FinishModal(NftData: any) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  console.log(JSON.stringify(NftData));

  return (
    <>
      <Flex justify="center" align="center">
        <Button
          colorScheme='blue'
          size='lg'
          height='100x'
          width='250px'
          onClick={onOpen}
        >
          FINISH THE MERGE
        </Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size='xl' blockScrollOnMount={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <br></br>

            <Button
              isLoading
              loadingText='Drinking the Juice'
              colorScheme='black'
              variant='outline'
            >
              Submit
            </Button>
            <Text> This is the body..Put stuff here Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.<br></br><br></br>
              <Button
                isLoading
                loadingText='Creating Super High Roller'
                colorScheme='black'
                variant='outline'
              >
                Submit
              </Button><br></br>
              Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.<br></br><br></br>
              <Button
                isLoading
                loadingText='Almost Complete'
                colorScheme='black'
                variant='outline'
              >
                Submit
              </Button><br></br>

              Est velit labore esse esse cupidatat. Velit id elit consequat minim. Mollit enim excepteur ea laboris adipisicing aliqua proident occaecat do do adipisicing adipisicing ut fugiat. Consequat pariatur ullamco aute sunt esse. Irure excepteur eu non eiusmod. Commodo commodo et ad ipsum elit esse pariatur sit adipisicing sunt excepteur enim.</Text>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
