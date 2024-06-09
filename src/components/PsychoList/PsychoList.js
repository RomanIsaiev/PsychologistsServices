import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPsychologists,
  loadMorePsychologists,
  setSortBy,
} from '../../redux/psychologists/psychoReducer';

import { PsychoItem } from '../PsychoItem/PsychoItem';
import Filter from 'components/Filter/Filter';
import { LoadMoreBtn, LoaderContainer } from './PsychoList.styled';
import { Modal } from 'components/Modal/Modal';
import { AppointmentForm } from 'components/AppointmentForm/AppointmentForm';
import { PsychoStyledList } from 'components/PsychoItem/PsychoItem.styled';
import { DotLoader } from 'react-spinners';

export const PsychoList = () => {
  const dispatch = useDispatch();
  const {
    psychologists,
    loadedPsychologists,
    currentPage,
    itemsPerPage,
    status,
    error,
  } = useSelector(state => state.psychologists);

  const [isFilterOpen, setFilterOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPsychologist, setSelectedPsychologist] = useState(null);
  const sortBy = useSelector(state => state.psychologists.sortBy);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPsychologists());
    }
  }, [status, dispatch]);

  const handleLoadMore = () => {
    dispatch(loadMorePsychologists());
  };

  if (status === 'loading') {
    return (
      <LoaderContainer>
        <DotLoader color="#FC832C" loading />
      </LoaderContainer>
    );
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  const toggleFilter = () => {
    setFilterOpen(!isFilterOpen);
  };

  const handleSelect = sortBy => {
    dispatch(setSortBy(sortBy));
    setFilterOpen(false);
  };

  const sortedPsychologists = [...psychologists].sort((a, b) => {
    switch (sortBy) {
      case 'name_asc':
        return a.name.localeCompare(b.name);
      case 'name_desc':
        return b.name.localeCompare(a.name);
      case 'price_high_low':
        return b.price_per_hour - a.price_per_hour;
      case 'price_low_high':
        return a.price_per_hour - b.price_per_hour;
      case 'popular':
        return b.rating - a.rating;
      case 'not_popular':
        return a.rating - b.rating;
      case 'all':
      default:
        return 0;
    }
  });

  const handleAppoClick = psychologist => {
    setSelectedPsychologist(psychologist);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPsychologist(null);
  };

  return (
    <div className="container">
      <Filter
        isOpen={isFilterOpen}
        onToggle={toggleFilter}
        onSelect={handleSelect}
      />
      <PsychoStyledList>
        {sortedPsychologists.map((psychologist, index) => (
          <PsychoItem
            key={index}
            psychologist={psychologist}
            onAppointmentClick={handleAppoClick}
          />
        ))}
      </PsychoStyledList>
      {currentPage * itemsPerPage < loadedPsychologists.length && (
        <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
      )}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <AppointmentForm
            psychologist={selectedPsychologist}
            onClose={closeModal}
          />
        </Modal>
      )}
    </div>
  );
};
