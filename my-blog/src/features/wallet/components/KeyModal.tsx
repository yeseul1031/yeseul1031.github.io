
import Modal from 'react-modal';

interface KeyModalProps {
  isOpen: boolean;
  privateKey: string;
  onClose: () => void;
}

export const KeyModal = ({ isOpen, privateKey, onClose }: KeyModalProps) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    className="key-modal"
    overlayClassName="modal-overlay"
  >
    <h3>🔒 프라이빗 키</h3>
    <p className="key-display">{privateKey}</p>
    <button onClick={onClose}>닫기</button>
  </Modal>
);
