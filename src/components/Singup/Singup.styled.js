import styled from 'styled-components';
import { adaptive } from 'utils/adaptive';
import { theme } from 'vars';

export const ModalTitle = styled.p`
  color: ${theme.color.black};
  font-family: Inter;
  font-size: 40px;
  ${adaptive('font-size', 40, 20, 0)}
  font-style: normal;
  font-weight: 500;
  line-height: 48px; /* 120% */
  ${adaptive('line-height', 48, 24, 0)}
  letter-spacing: -0.8px;

  margin-bottom: 20px;
`;

export const ModalDesc = styled.p`
  color: rgba(25, 26, 21, 0.5);
  font-family: Inter;
  font-size: 16px;
  ${adaptive('font-size', 16, 14, 0)}
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */

  margin-bottom: 40px;
  ${adaptive('margin-bottom', 40, 20, 0)}
`;

export const ModalForm = styled.form`
  div {
    margin-bottom: 18px;
  }

  div:last-of-type {
    margin-bottom: 40px;
    ${adaptive('margin-bottom', 40, 20, 0)}
  }
`;

export const Input = styled.input`
  padding: calc(8px + (16 - 8) * ((100vw - 375px) / (1440 - 375)))
    calc(9px + (18 - 9) * ((100vw - 375px) / (1440 - 375)));
  border-radius: 12px;
  border: 1px solid rgba(25, 26, 21, 0.1);
  width: 100%;
  background: ${theme.color.white};

  &::placeholder {
    color: ${theme.color.black};
    font-family: Inter;
    font-size: 16px;
    ${adaptive('font-size', 16, 14, 0)}
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */

    opacity: 1;
  }
`;

export const ModalButton = styled.button`
  color: ${theme.color.white};
  font-family: Inter;
  font-size: 16px;
  ${adaptive('font-size', 16, 14, 0)}
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  letter-spacing: -0.16px;

  padding: 16px;
  ${adaptive('padding', 16, 8, 0)}
  border-radius: 30px;
  background: #fc832c;
  border: inherit;

  width: 100%;
`;

export const PasswordBox = styled.div`
  position: relative;
`;

export const EyeButton = styled.button`
  position: absolute;
  top: 16px;
  right: 18px;
  ${adaptive('right', 18, 9, 0)}
  ${adaptive('top', 16, 8, 0)}

  display: block;
  background: none;
  border: none;
`;

export const EyeIcon = styled.img``;
