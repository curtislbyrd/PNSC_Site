import { ButtonGroup, Container, IconButton, Stack, Text, Flex } from '@chakra-ui/react'
import React, { FC } from 'react'
import { FaGithub, FaDiscord, FaTwitter } from 'react-icons/fa'

import ME from '../../assets/img/whiteME.png';
import discord from '../../assets/img/whiteDiscord.png';
import twitter from '../../assets/img/whiteTwitter.png';

export const Footer: FC = props => {
  return (
    <>
      <footer>
      <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }} centerContent>
        <Flex alignItems='center'>
        <Stack spacing={{ base: '4', md: '5' }} centerContent>
          <Stack justify="space-between" direction="row" align="center">
            <ButtonGroup color="white" variant='outline'>
              <IconButton
                as="a"
                href="#"
                aria-label="LinkedIn"
                icon={<FaDiscord fontSize="1.25rem" />}
              />
              <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
              <IconButton
                as="a"
                href="#"
                aria-label="Twitter"
                icon={<FaTwitter fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </Stack>
          <Text fontSize="sm" color="white">
            &copy; {new Date().getFullYear()} PNSC, Inc. All rights reserved.
          </Text>
        </Stack>
          </Flex>

        
      </Container>
        </footer>
    </>
  )
};