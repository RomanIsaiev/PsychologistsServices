import styled from 'styled-components';

export const FilterTitle = styled.p`
  color: #8a8a89;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */

  margin-bottom: 8px;
`;

export const FilterContainer = styled.div`
  position: relative;

  margin-bottom: 32px;
  width: 226px;

  cursor: pointer;
`;

export const LabelArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 18px;
  border-radius: 14px;
  background: #fc832c;
`;

export const Label = styled.p`
  color: #fbfbfb;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
`;

export const OptionsList = styled.ul`
  position: absolute;
  left: 0;
  top: 82px;

  z-index: 3;

  width: 226px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 14px 18px;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0px 20px 69px 0px rgba(0, 0, 0, 0.07);
`;

export const OptionItem = styled.li`
  color: rgba(25, 26, 21, 0.3);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */

  &:hover,
  &:focus {
    color: #191a15;
  }
`;

export const Arrow = styled.img``;
