
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

interface WalletState {
  address: string;
  balance: string;
  error: string | null;
  mnemonic: string;
}

export const useWallet = (): WalletState & {
  generateNewMnemonic: () => void;
  getBalance: (address: string, network: string) => Promise<void>;
} => {
  const [state, setState] = useState<WalletState>({
    address: '',
    balance: '0',
    error: null,
    mnemonic: import.meta.env.VITE_MNEMONIC || ''
  });

  const getBalance = async (address: string, network: string) => {
    try {
      const provider = new ethers.providers.InfuraProvider(
        network,
        import.meta.env.VITE_INFURA_KEY
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

  const generateNewMnemonic = () => {
    const wallet = ethers.Wallet.createRandom();
    setState({
      address: wallet.address,
      balance: '0',
      error: null,
      mnemonic: wallet.mnemonic.phrase
    });
  };

  return {
    ...state,
    generateNewMnemonic,
    getBalance
  };
};
