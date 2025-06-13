import { ethers } from 'ethers';
interface WalletState {
    address: string;
    balance: string;
    error: string | null;
    mnemonic: string;
    privateKey: string;
}
export declare const useWallet: () => WalletState & {
    createWallet: () => ethers.Wallet;
    getBalance: (address: string, network: string) => Promise<void>;
    sendTransaction: (to: string, amount: string, network: string) => Promise<ethers.TransactionResponse>;
    generateNewMnemonic: () => void;
};
export {};
