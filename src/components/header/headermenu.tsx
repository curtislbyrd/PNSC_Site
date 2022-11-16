import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Link,
  Text,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'


export const HeaderMenu = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true })
  return (
    <Box>
      <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
        <Container py={{ base: '4', lg: '5' }}>
          

            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="4">
                  <Button colorScheme='white' variant='outline'>
                    <Link href='https://splnftforum.gitbook.io/pnsc-whitepaper-v1/' isExternal>White Paper
                    </Link></Button>
                  <Button colorScheme='white' isLoading loadingText='Merge' variant='outline'>
                   
                  </Button>

                  <Menu>
                    <MenuButton
                      as={Button}
                      variant='outline'
                      _hover={{ bg: 'black' }}
                      _expanded={{ bg: 'black' }}>
                      Staking
                    </MenuButton>
                    <MenuList bg='white'>
                      <MenuItem color='black'>
                        <Link href='https://diamondvaults.io/vault/PNSC_HR' isExternal>Stake High Roller
                        </Link>
                      </MenuItem>
                      <MenuItem color='black'>
                        <Link href='https://diamondvaults.io/vault/High_Juice' isExternal>Stake High Juice
                        </Link>
                      </MenuItem>
                      <MenuItem color='black' style={{ backgroundColor: 'transparent' }}><Text as='s'>Stake HR Zombies</Text></MenuItem>
                    </MenuList>
                  </Menu>

                  <Button colorScheme='white' variant='outline'>
                    <Link href='/rank'>Rarity Tool</Link>
                  </Button>
                  <Button colorScheme='white' isLoading loadingText='Benders' variant='outline'>Benders</Button>
                </ButtonGroup>
              </Flex>
            ) : (
              <></>
            )}
          
        </Container>
      </Box>
    </Box>
  )
}
