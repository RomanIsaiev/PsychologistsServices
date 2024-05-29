import styled from 'styled-components';

export const PsychoContainer = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;
`;

export const PsychoStyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;

  margin-bottom: 64px;
`;

export const LoadMoreBtn = styled.button`
  display: block;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  letter-spacing: -0.16px;
  border-radius: 30px;
  padding: 14px 39px;
  border: none;
  cursor: pointer;

  color: #fbfbfb;
  background: #fc832c;
  padding: 14px 40px;
  width: 176px;
  margin: 0 auto;
`;
