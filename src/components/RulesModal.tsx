import { useState, ReactNode } from 'react';

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
    <div className={`rules-modal${isClosing ? ' closing' : ''}`}>
      <div className="rules-modal-overlay" onClick={handleModalClose} />
      <div className="rules-modal-content">{children}</div>
    </div>
  );
}

export default RulesModal;
