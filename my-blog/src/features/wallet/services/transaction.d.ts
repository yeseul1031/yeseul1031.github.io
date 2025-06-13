import { ethers } from 'ethers';
export declare const sendTransaction: (privateKey: string, to: string, amount: string, network: string) => Promise<ethers.providers.TransactionResponse>;
export declare const getTransactionHistory: (address: string, network: string) => Promise<ethers.providers.TransactionResponse[]>;
