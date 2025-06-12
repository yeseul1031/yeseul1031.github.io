
import { ethers } from 'ethers';

export const sendTransaction = async (
  to: string,
  amount: string,
  privateKey: string,
  providerUrl: string
) => {
  const provider = new ethers.providers.JsonRpcProvider(providerUrl);

  const signer = new ethers.Wallet(privateKey, provider);
  return signer.sendTransaction({
    to,
    value: ethers.utils.parseEther(amount)
  });
};

export const getTransactionHistory = async (address: string, providerUrl: string) => {
  const provider = new ethers.providers.JsonRpcProvider(providerUrl);
  return provider.getHistory(address);
};
