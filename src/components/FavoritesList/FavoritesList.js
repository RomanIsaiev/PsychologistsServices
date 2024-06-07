import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeFavorites } from '../../redux/psychologists/favoriteReducer';
import { PsychoItem } from 'components/PsychoItem/PsychoItem';
import Filter from 'components/Filter/Filter';
import { NoFavorite } from './FavoritesList.styled';
import { setSortBy } from '../../redux/psychologists/psychoReducer';

import { Modal } from 'components/Modal/Modal';
import { AppointmentForm } from 'components/AppointmentForm/AppointmentForm';
import { PsychoStyledList } from 'components/PsychoItem/PsychoItem.styled';

export const FavoritesList = () => {
  const dispatch = useDispatch();

  const uid = useSelector(state => state.auth.uid);

  const favorites = useSelector(state => state.favorites.items);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPsychologist, setSelectedPsychologist] = useState(null);
  const sortBy = useSelector(state => state.psychologists.sortBy);
  const [isFilterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    if (uid) {
      dispatch(initializeFavorites());
    }
  }, [dispatch, uid]);

  const toggleFilter = () => {
    setFilterOpen(!isFilterOpen);
  };

  const handleSelect = sortBy => {
    dispatch(setSortBy(sortBy));
    setFilterOpen(false);
  };

  const sortedPsychologists = [...favorites].sort((a, b) => {
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
      {favorites.length === 0 ? (
        <NoFavorite>No favorite psychologists.</NoFavorite>
      ) : (
        <>
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
        </>
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
