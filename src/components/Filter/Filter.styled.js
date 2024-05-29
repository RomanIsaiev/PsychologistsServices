import styled from 'styled-components';

export const FilterContainer = styled.div`
  margin-bottom: 32px;
`;

export const FilterTitle = styled.p`
  color: #8a8a89;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */

  margin-bottom: 8px;
`;

export const FilterSelect = styled.select`
  color: #fbfbfb;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */

  padding: 14px 18px;
  border-radius: 14px;
  background: #fc832c;
  border: inherit;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url('images/svg/filterArrow.svg');
  background-repeat: no-repeat;
  background-position: right 18px center;
`;

export const FilterOption = styled.option`
  color: #000;
  background-color: #fff;
`;
