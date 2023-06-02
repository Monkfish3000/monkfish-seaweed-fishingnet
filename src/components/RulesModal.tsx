import { useState, ReactNode, useRef, useEffect } from 'react';
import styles from './RulesModal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  const [isClosing, setIsClosing] = useState(false);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalContainerRef.current &&
        !modalContainerRef.current.contains(event.target as Node)
      ) {
        handleModalClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  function handleModalClose() {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  }

  if (!isOpen && !isClosing) {
    return null;
  }

  return (
    <>
      <div
        className={`${styles['rules-modal-overlay']} ${
          isOpen ? styles.open : ''
        }${isClosing ? ' ' + styles.closing : ''}`}
        ref={modalContainerRef}
        onClick={handleModalClose}
      >
        <div className={styles['rules-modal-content']}>{children}</div>
      </div>
    </>
  );
}

function RulesModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleModalOpen() {
    setIsModalOpen(!isModalOpen);
  }

  function handleModalClose() {
    setIsModalOpen(false);
  }

  const Button = () => {
    return (
      <button className={styles['open-btn']} onClick={handleModalOpen}>
        Rules
      </button>
    );
  };

  return (
    <div>
      <Button />
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <h1>Monkfish, Seaweed, Fishing Net</h1>
        <h2>The rules are simple: </h2>
        <p>
          Choose which item of the sea you want to play. Hit the play button and
          wait for the computer to choose their item.
        </p>
        <p>
          🐡🐡🐡 Monkfish beats Seaweed! 🌿🌿🌿 Seaweed beats Fishing net! 🎣 🎣
          🎣 Fishing net beats Monkfish!
        </p>
        <button onClick={handleModalClose}>Close</button>
      </Modal>
    </div>
  );
}

export default RulesModal;
