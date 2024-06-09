import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  display: block;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  letter-spacing: -0.16px;
  border-radius: 30px;
  border: none;
  cursor: pointer;

  color: #fbfbfb;
  background: #fc832c;
  padding: 14px 40px;
  width: 176px;
  margin: 0 auto;
`;

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  z-index: 9999;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.5s ease, visibility 0.5s ease;

  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
