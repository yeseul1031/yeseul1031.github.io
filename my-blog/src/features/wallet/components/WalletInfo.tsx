
import { useState } from 'react';
import { ethers } from 'ethers';
import Modal from 'react-modal';

interface WalletInfoProps {
  address: string;
  balance: string;
  onWalletCreate: () => void;
}

export const WalletInfo = ({ address, balance, onWalletCreate }: WalletInfoProps) => {
  const [showKey, setShowKey] = useState(false);
  const [privateKey, setPrivateKey] = useState('');

  const handleCreateWallet = () => {
    const wallet = ethers.Wallet.createRandom();
    setPrivateKey(wallet.privateKey);
    onWalletCreate();
  };

  return (
    <div className="wallet-card">
      <h3>🔑 블록체인 지갑</h3>
      {address ? (
        <>
          <p>주소: {address}</p>
          <p>잔액: {balance} ETH</p>
          <button onClick={() => setShowKey(true)}>프라이빗 키 확인</button>
        </>
      ) : (
        <button onClick={handleCreateWallet}>지갑 생성</button>
      )}

      <Modal
        isOpen={showKey}
        onRequestClose={() => setShowKey(false)}
        className="key-modal"
        overlayClassName="modal-overlay"
      >
        <h4>⚠️ 프라이빗 키 (절대 공유 금지)</h4>
        <code>{privateKey}</code>
        <button onClick={() => navigator.clipboard.writeText(privateKey)}>복사</button>
        <button onClick={() => setShowKey(false)}>닫기</button>
      </Modal>
    </div>
  );
};
