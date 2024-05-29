import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy } from '../../redux/psychologists/psychoReducer';
import {
  Arrow,
  FilterContainer,
  FilterTitle,
  Label,
  LabelArea,
  OptionItem,
  OptionsList,
} from './Filter.styled';

const Filter = ({ isOpen, onToggle }) => {
  const dispatch = useDispatch();
  const sortBy = useSelector(state => state.psychologists.sortBy);
  const IMAGE_BASE_URL = process.env.PUBLIC_URL + '/images';

  const filterOptions = [
    { label: 'All', value: 'all' },
    { label: 'Name A-Z', value: 'name_asc' },
    { label: 'Name Z-A', value: 'name_desc' },
    { label: 'Price High to Low', value: 'price_high_low' },
    { label: 'Price Low to High', value: 'price_low_high' },
    { label: 'Popular', value: 'popular' },
    { label: 'Not Popular', value: 'not_popular' },
  ];
  const filterRef = useRef(null);

  const handleSortChange = value => {
    dispatch(setSortBy(value));
    onToggle();
  };

  const handleClickOutside = event => {
    if (
      filterOptions.current &&
      !filterOptions.current.contains(event.target)
    ) {
      onToggle();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <FilterContainer ref={filterRef}>
      <FilterTitle>Filter</FilterTitle>
      <LabelArea onClick={onToggle}>
        <Label>
          {filterOptions.find(option => option.value === sortBy).label}
        </Label>
        <Arrow
          src={`${IMAGE_BASE_URL}/svg/filterArrow.svg`}
          width="20"
          height="20"
          alt="arrow"
        />
      </LabelArea>
      {isOpen && (
        <OptionsList>
          {filterOptions.map((option, index) => (
            <OptionItem
              key={index}
              onClick={() => handleSortChange(option.value)}
            >
              {option.label}
            </OptionItem>
          ))}
        </OptionsList>
      )}
    </FilterContainer>
  );
};

export default Filter;
