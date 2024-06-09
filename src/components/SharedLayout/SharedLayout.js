import { Header } from 'components/Header/Header';
import { Modal } from 'components/Modal/Modal';
import { LoaderContainer } from 'components/PsychoList/PsychoList.styled';
import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { DotLoader } from 'react-spinners';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <div id="outer-container">
      <Header openModal={openModal} closeModal={closeModal} />
      <main id="page-wrap">
        <Suspense
          fallback={
            <LoaderContainer>
              <DotLoader color="#FC832C" loading />
            </LoaderContainer>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalContent}
      </Modal>
    </div>
  );
};
