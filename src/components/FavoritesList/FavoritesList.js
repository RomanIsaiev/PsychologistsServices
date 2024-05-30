import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeFavorites } from '../../redux/psychologists/favoriteReducer';
import { PsychoItem } from 'components/PsychoItem/PsychoItem';
import Filter from 'components/Filter/Filter';
import { FavoriteContainer, NoFavorite } from './FavoritesList.styled';
import { setSortBy } from '../../redux/psychologists/psychoReducer';
import { PsychoStyledList } from 'components/PsychoList/PsychoList.styled';

export const FavoritesList = () => {
  const dispatch = useDispatch();

  const favorites = useSelector(state => state.favorites.items);
  const sortBy = useSelector(state => state.psychologists.sortBy);
  const [isFilterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    dispatch(initializeFavorites());
  }, [dispatch]);

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

  return (
    <FavoriteContainer className="container">
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
                index={index}
              />
            ))}
          </PsychoStyledList>
        </>
      )}
    </FavoriteContainer>
  );
};
