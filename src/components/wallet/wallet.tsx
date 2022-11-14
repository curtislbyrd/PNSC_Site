import React,{ FC, useEffect, useState } from 'react';
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useAutoConnect } from '../../contexts/AutoConnectProvider'





export const Wallet: FC = props => {

  // To fix hydration error
const [isSSR, setIsSSR] = useState(true);
    useEffect(() => {
    setIsSSR(false);
}, []);
  
  return (
    <>
      <div className="navbar-end">
	      <div className="navbar flex flex-row md:mb-2 shadow-lg bg-neutral text-neutral-content">
          {isSSR ? null: <WalletMultiButton className="btn btn-light" />}
		        <div className="dropdown dropdown-end">
		  </div>
        </div>
            </div>
    </>
  )
};