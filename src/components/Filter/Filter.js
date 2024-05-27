import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy } from '../../redux/psychologists/psychoReducer';

const Filter = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector(state => state.psychologists.sortBy);

  const handleSortChange = event => {
    dispatch(setSortBy(event.target.value));
  };

  return (
    <div>
      <label htmlFor="sort">Sort by: </label>
      <select id="sort" value={sortBy} onChange={handleSortChange}>
        <option value="all">Show All</option>
        <option value="name_asc">Name A-Z</option>
        <option value="name_desc">Name Z-A</option>
        <option value="price_high_low">Price High to Low</option>
        <option value="price_low_high">Price Low to High</option>
        <option value="popular">Popular</option>
        <option value="not_popular">Not Popular</option>
      </select>
    </div>
  );
};

export default Filter;
