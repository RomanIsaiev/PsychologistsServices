import { useEffect } from 'react';
import { CloseButton, ModalContainer, ModalOverlay } from './Modal.styled';
const IMAGE_BASE_URL = process.env.PUBLIC_URL + '/images';

export const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <img
            src={`${IMAGE_BASE_URL}/svg/close-modal.svg`}
            alt="close"
            width="32"
            height="32"
          />
        </CloseButton>
        {children}
      </ModalContainer>
    </ModalOverlay>
  );
};
