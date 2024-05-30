import { Header } from 'components/Header/Header';
import { Modal } from 'components/Modal/Modal';
import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SharedLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const notify = () => toast('Wow so easy!');

  const openModal = content => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header openModal={openModal} closeModal={closeModal} />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
          <ToastContainer />
        </Suspense>
      </main>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalContent}
      </Modal>
    </>
  );
};
