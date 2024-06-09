import styled from 'styled-components';
import { adaptive } from 'utils/adaptive';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ModalContainer = styled.div`
  background-color: white;
  ${adaptive('padding', 64, 43, 0)}
  border-radius: 5px;
  position: relative;

  border-radius: 30px;
  background: #fbfbfb;

  ${adaptive('width', 700, 350, 768)}
`;

export const CloseButton = styled.button`
  position: absolute;
  ${adaptive('top', 20, 10, 0)}
  ${adaptive('right', 20, 10, 0)}
  background: none;
  border: none;
  cursor: pointer;

  z-index: 999;
`;
