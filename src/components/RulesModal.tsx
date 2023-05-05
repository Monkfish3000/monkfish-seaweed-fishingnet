import { useState, ReactNode } from 'react';
import styles from './RulesModal.module.css';

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

function RulesModal({ isOpen, onClose, children }: RulesModalProps) {
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
      className={`${styles['rules-modal']}${
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

export default RulesModal;
