import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPsychologists,
  loadMorePsychologists,
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

  return (
    <PsychoContainer className="container">
      <Filter />
      <PsychoStyledList>
        {psychologists.map((psychologist, index) => (
          <PsychoItem key={index} psychologist={psychologist} index={index} />
        ))}
      </PsychoStyledList>
      {currentPage * itemsPerPage < loadedPsychologists.length && (
        <ButtonRegister onClick={handleLoadMore}>Load more</ButtonRegister>
      )}
    </PsychoContainer>
  );
};
