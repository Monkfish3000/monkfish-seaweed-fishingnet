import { useState, ReactNode } from 'react';
import styles from './RulesModal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  const [isClosing, setIsClosing] = useState(false);

  function handleModalClose() {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  }

  if (!isOpen && !isClosing) {
    return null;
  }

  return (
    <div
      className={`${styles['rules-modal open']}${
        isClosing ? ' ' + styles.closing : ''
      }`}
    >
      <div
        className={styles['rules-modal-overlay']}
        onClick={handleModalClose}
      />
      <div className={styles['rules-modal-content']}>{children}</div>
    </div>
  );
}

function RulesModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleModalOpen() {
    setIsModalOpen(!isModalOpen);
    console.log(isModalOpen);
  }

  function handleModalClose() {
    setIsModalOpen(false);
  }

  return (
    <div>
      <button onClick={handleModalOpen}>Rules</button>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <h2>Modal Title</h2>
        <p>This is the modal content.</p>
        <button onClick={handleModalClose}>Close</button>
      </Modal>
    </div>
  );
}

export default RulesModal;
