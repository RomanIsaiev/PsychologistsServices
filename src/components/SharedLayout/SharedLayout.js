import { Header } from 'components/Header/Header';
import { Modal } from 'components/Modal/Modal';
import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = content => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header openModal={openModal} closeModal={closeModal} />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalContent}
      </Modal>
    </div>
  );
};
