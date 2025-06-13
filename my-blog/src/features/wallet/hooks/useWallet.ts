import { useState } from 'react';
import { ethers } from 'ethers';

interface WalletState {
  address: string;
  balance: string;
  error: string | null;
  mnemonic: string;
  privateKey: string;
}

export const useWallet = (): WalletState & {
  createWallet: () => ethers.Wallet;
  getBalance: (address: string, network: string) => Promise<void>;
  sendTransaction: (to: string, amount: string, network: string) => Promise<ethers.providers.TransactionResponse>;
  generateNewMnemonic: () => void; 
} => {
  const [state, setState] = useState<WalletState>({
    address: '',
    balance: '0',
    error: null,
    mnemonic: import.meta.env['VITE_MNEMONIC'] || '',
    privateKey: ''
  });

  const createWallet = () => {
    const wallet = ethers.Wallet.createRandom();
    setState(prev => ({
      ...prev,
      address: wallet.address,
      mnemonic: wallet.mnemonic.phrase,
      privateKey: wallet.privateKey,
      balance: '0',
      error: null
    }));
    return wallet;
  };

  const getBalance = async (address: string, network: string) => {
    try {
      const provider = new ethers.providers.InfuraProvider(
        network,
        import.meta.env['VITE_INFURA_KEY']
      );
      const balance = await provider.getBalance(address);
      setState(prev => ({
        ...prev,
        balance: ethers.utils.formatEther(balance),
        error: null
      }));
    } catch (err) {
      setState(prev => ({
        ...prev,
        error: '잔액 조회 실패'
      }));
    }
  };

  const sendTransaction = async (
    to: string,
    amount: string,
    network: string
  ) => {
    try {
      const provider = new ethers.providers.InfuraProvider(
        network,
        import.meta.env['VITE_INFURA_KEY']
      );
      const signer = new ethers.Wallet(state.privateKey, provider);
      const tx = await signer.sendTransaction({
        to,
        value: ethers.utils.parseEther(amount)
      });
      return tx;
    } catch (err) {
      setState(prev => ({
        ...prev,
        error: '트랜잭션 실패'
      }));
      throw err;
    }
  };

  const generateNewMnemonic = () => {
    const wallet = ethers.Wallet.createRandom();
    setState(prev => ({
      ...prev,
      mnemonic: wallet.mnemonic.phrase,
      privateKey: wallet.privateKey,
      address: wallet.address,
      balance: '0',
      error: null
    }));
  };

  return {
    ...state,
    createWallet,
    getBalance,
    sendTransaction,
    generateNewMnemonic
  };
};
