// src/components/pages/Wallet.tsx
import { WalletInfo } from '../../features/wallet/components/WalletInfo';
import { useWallet } from '../../features/wallet/hooks/useWallet';

const Wallet = () => {
  const { address, balance, createWallet } = useWallet();

  return (
    <div>
     
      <WalletInfo address={address} balance={balance} onWalletCreate={createWallet} />
    </div>
  );
};

export default Wallet;
