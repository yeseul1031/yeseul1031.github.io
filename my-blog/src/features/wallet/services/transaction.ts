
import { ethers } from 'ethers';


export const sendTransaction = async (
  privateKey: string,
  to: string,
  amount: string,
  network: string
): Promise<ethers.providers.TransactionResponse> => {
  try {
    const provider = new ethers.providers.InfuraProvider(
      network,
      import.meta.env['VITE_INFURA_KEY']
    );
    const signer = new ethers.Wallet(privateKey, provider);
    
    const tx = await signer.sendTransaction({
      to,
      value: ethers.utils.parseEther(amount),
    });

    await tx.wait(1);
    return tx;
  } catch (err) {
    throw new Error(`트랜잭션 실패: ${(err as Error).message}`);
  }
};


export const getTransactionHistory = async (
  address: string,
  network: string
): Promise<ethers.providers.TransactionResponse[]> => {
  try {
    const provider = new ethers.providers.EtherscanProvider(
      network,
      import.meta.env['VITE_ETHERSCAN_API_KEY']
    );
    return provider.getHistory(address);
  } catch (err) {
    throw new Error(`내역 조회 실패: ${(err as Error).message}`);
  }
};
