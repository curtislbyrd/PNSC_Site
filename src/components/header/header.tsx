import React,{ FC, Suspense } from 'react';
import Image from 'next/image';
import container from '../../styles/header.module.css';
import { useAutoConnect } from '../../contexts/AutoConnectProvider';


import { Link } from '@chakra-ui/react'

//import { useAutoConnect } from '@solana/wallet-adapter-react-ui';
//import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';


import { Slide } from '../../components/slidebar/slide';
import { Wallet } from '../../components/wallet/wallet';
import { HeaderMenu } from './headermenu'
import { IconsTable } from './icons'
import dynamic, {DynamicOptions} from 'next/dynamic'

import { ChakraProvider } from '@chakra-ui/react';
//images
import PNSCLOGO from '../../assets/img/PNSCLOGO.png';

/*
const Wallet = dynamic(import('../../components/wallet/wallet') as DynamicOptions<{}>, {
  ssr: false
})
*/


// This is the header with a wallet.. Working on middle menu - cb
export const Header: FC = props => {  

  const { autoConnect, setAutoConnect } = useAutoConnect();

  return (
<>
    
      <header className={container.header}>
        <div>
        <Link href='/' > 
          <Image src={PNSCLOGO} width="200" height="112" alt="PNSC Logo" />
        </Link>
        </div>
          <HeaderMenu />
        <div className={container.menu}>
           <Wallet />
          <Slide  />
        </div>
      </header>
    
</>
  )
};
