import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadPsychologists,
  loadMorePsychologists,
} from '../../redux/psychologists/actions';
import { fetchDataFromDatabase } from '../../redux/psychologists/api';
import { PsychoItem } from 'components/PsychoItem/PsychoItem';
import { ButtonRegister } from 'components/Header/Header.styled';

export const PsychoList = () => {
  const dispatch = useDispatch();
  const psychologists = useSelector(state => state.psychologists);
  const loadedPsychologists = useSelector(state => state.loadedPsychologists);

  useEffect(() => {
    fetchDataFromDatabase('/')
      .then(data => {
        dispatch(loadPsychologists(Object.values(data)));
      })
      .catch(error => {
        console.error(error);
      });
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(loadMorePsychologists());
  };

  return (
    <div className="container">
      <ul>
        {psychologists.map((psychologist, index) => (
          <PsychoItem key={index} psychologist={psychologist} />
        ))}
      </ul>
      {psychologists.length < loadedPsychologists.length && (
        <ButtonRegister onClick={handleLoadMore}>Load more</ButtonRegister>
      )}
    </div>
  );
};
