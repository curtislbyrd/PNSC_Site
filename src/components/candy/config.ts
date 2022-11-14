import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

export const network = (process.env.NEXT_PUBLIC_SOLANA_NETWORK ||
  WalletAdapterNetwork.Devnet) as WalletAdapterNetwork;
//const network = WalletAdapterNetwork.Devnet;

export const rpcHost = process.env.NEXT_PUBLIC_RPC_HOST || clusterApiUrl(network);

export const candyMachineId = new PublicKey(
  process.env.NEXT_PUBLIC_CANDY_MACHINE_ID ||
    "BQEz8Buc6rQ4FUhHrL4CmHEaZ7fum78qTUdy5nBzW7Pm"
);

export const defaultGuardGroup =
  process.env.NEXT_PUBLIC_DEFAULT_GUARD_GROUP || "J7EJdu9FJLXkQBmYAHzT6DjQcrUr25uMBQcfonRjAm41"; 