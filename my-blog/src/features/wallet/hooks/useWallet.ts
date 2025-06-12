import { useState } from 'react';
import { ethers } from 'ethers';

export const useWallet = () => {
  const [address, setAddress] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [balance, setBalance] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [transactions, setTransactions] = useState<any[]>([]);

 
  const provider = new ethers.providers.JsonRpcProvider(
    `https://${process.env.REACT_APP_DEFAULT_NETWORK}.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`
  );

  const createWallet = () => {
    const wallet = ethers.Wallet.createRandom();
    setAddress(wallet.address);
    setPrivateKey(wallet.privateKey);
    setError(null);
    return wallet;
  };

  const getBalance = async (addr: string) => {
    try {
      const balanceWei = await provider.getBalance(addr);
      setBalance(ethers.utils.formatEther(balanceWei));
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : '잔액 조회 실패');
    }
  };

  
  const getHistory = async (addr: string) => {
    try {
      const txs = await provider.getHistory(addr);
      setTransactions(txs);
    } catch (err) {
      setError(err instanceof Error ? err.message : '내역 조회 실패');
    }
  };

  const sendTransaction = async (
    to: string,
    amount: string,
    privKey: string
  ) => {
    try {
      const signer = new ethers.Wallet(privKey, provider);
      const tx = await signer.sendTransaction({
        to,
        value: ethers.utils.parseEther(amount),
      });
      const receipt = await tx.wait();
      setError(null);
      return receipt;
    } catch (err) {
      setError(err instanceof Error ? err.message : '트랜잭션 실패');
      return null;
    }
  };

  return {
    address,
    privateKey,
    balance,
    error,
    createWallet,
    getBalance,
    sendTransaction,
    transactions,
    getHistory,
  };
};
