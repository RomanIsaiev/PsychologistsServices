import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeFavorites } from '../../redux/psychologists/favoriteReducer';
import { PsychoItem } from 'components/PsychoItem/PsychoItem';
import Filter from 'components/Filter/Filter';

const sortFavorites = (favorites, sortBy) => {
  switch (sortBy) {
    case 'name_asc':
      return [...favorites].sort((a, b) => a.name.localeCompare(b.name));
    case 'name_desc':
      return [...favorites].sort((a, b) => b.name.localeCompare(a.name));
    case 'price_high_low':
      return [...favorites].sort((a, b) => b.price_per_hour - a.price_per_hour);
    case 'price_low_high':
      return [...favorites].sort((a, b) => a.price_per_hour - b.price_per_hour);
    case 'popular':
      return [...favorites].sort((a, b) => b.rating - a.rating);
    case 'not_popular':
      return [...favorites].sort((a, b) => a.rating - b.rating);
    case 'all':
    default:
      return favorites;
  }
};

export const FavoritesList = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.items);
  const sortBy = useSelector(state => state.psychologists.sortBy);

  useEffect(() => {
    dispatch(initializeFavorites());
  }, [dispatch]);

  const sortedFavorites = sortFavorites(favorites, sortBy);

  if (favorites.length === 0) {
    return <div>No favorite psychologists.</div>;
  }

  return (
    <div className="container">
      <Filter />
      <ul>
        {sortedFavorites.map((psychologist, index) => (
          <PsychoItem key={index} psychologist={psychologist} index={index} />
        ))}
      </ul>
    </div>
  );
};
