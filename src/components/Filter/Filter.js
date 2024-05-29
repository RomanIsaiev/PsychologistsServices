import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy } from '../../redux/psychologists/psychoReducer';
import {
  FilterContainer,
  FilterOption,
  FilterSelect,
  FilterTitle,
} from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector(state => state.psychologists.sortBy);

  const handleSortChange = event => {
    dispatch(setSortBy(event.target.value));
  };

  return (
    <FilterContainer>
      <FilterTitle>Filters</FilterTitle>
      <FilterSelect id="sort" value={sortBy} onChange={handleSortChange}>
        <FilterOption value="all">Show All</FilterOption>
        <FilterOption value="name_asc">Name A-Z</FilterOption>
        <FilterOption value="name_desc">Name Z-A</FilterOption>
        <FilterOption value="price_high_low">Price High to Low</FilterOption>
        <FilterOption value="price_low_high">Price Low to High</FilterOption>
        <FilterOption value="popular">Popular</FilterOption>
        <FilterOption value="not_popular">Not Popular</FilterOption>
      </FilterSelect>
    </FilterContainer>
  );
};

export default Filter;
