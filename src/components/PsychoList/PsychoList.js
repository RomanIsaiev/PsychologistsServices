import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPsychologists,
  loadMorePsychologists,
  setSortBy,
} from '../../redux/psychologists/psychoReducer';

import { PsychoItem } from '../PsychoItem/PsychoItem';
import { ButtonRegister } from 'components/Header/Header.styled';
import Filter from 'components/Filter/Filter';
import { PsychoContainer, PsychoStyledList } from './PsychoList.styled';

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
    return <div>Loading...</div>;
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

  return (
    <PsychoContainer className="container">
      <Filter
        isOpen={isFilterOpen}
        onToggle={toggleFilter}
        onSelect={handleSelect}
      />
      <PsychoStyledList>
        {sortedPsychologists.map((psychologist, index) => (
          <PsychoItem key={index} psychologist={psychologist} index={index} />
        ))}
      </PsychoStyledList>
      {currentPage * itemsPerPage < loadedPsychologists.length && (
        <ButtonRegister onClick={handleLoadMore}>Load more</ButtonRegister>
      )}
    </PsychoContainer>
  );
};
