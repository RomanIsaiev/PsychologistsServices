import styled from 'styled-components';
import { adaptive } from 'utils/adaptive';
import { theme } from 'vars';

export const PsychologistContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  ${adaptive('margin-bottom', 40, 20, 0)}
`;

export const PsychologistImage = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 15px;
`;

export const NameContainer = styled.div``;

export const NameSubtitle = styled.span`
  color: #8a8a89;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */

  margin-bottom: 4px;
`;

export const PsychologistName = styled.h3`
  color: #191a15;
  font-family: Inter;
  ${adaptive('font-size', 16, 14, 0)}
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
`;

export const PhoneTimeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 16px;
  gap: 8px;
`;

export const PhoneContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 1280px) {
    width: 49.2%;
  }
`;

export const TimeContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 1280px) {
    width: 49.2%;
  }
`;

export const PhoneInput = styled.input`
  padding: calc(8px + (16 - 8) * ((100vw - 375px) / (1440 - 375)))
    calc(9px + (18 - 9) * ((100vw - 375px) / (1440 - 375)));
  border-radius: 12px;
  border: 1px solid rgba(25, 26, 21, 0.1);
  background: ${theme.color.white};

  color: ${theme.color.black};
  font-family: Inter;
  ${adaptive('font-size', 16, 14, 0)}
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */

  cursor: pointer;

  width: 100%;
`;

export const TimeInput = styled.input`
  padding: calc(8px + (16 - 8) * ((100vw - 375px) / (1440 - 375)))
    calc(9px + (18 - 9) * ((100vw - 375px) / (1440 - 375)));
  border-radius: 12px;
  border: 1px solid rgba(25, 26, 21, 0.1);
  background: ${theme.color.white};

  cursor: pointer;

  &::placeholder {
    color: ${theme.color.black};
    font-family: Inter;
    ${adaptive('font-size', 16, 14, 0)}
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */

    opacity: 1;
  }
`;

export const CommentInput = styled.textarea`
  margin-top: 16px;

  padding: calc(8px + (16 - 8) * ((100vw - 375px) / (1440 - 375)))
    calc(9px + (18 - 9) * ((100vw - 375px) / (1440 - 375)));
  border-radius: 12px;
  border: 1px solid rgba(25, 26, 21, 0.1);
  background: ${theme.color.white};
  resize: none;

  cursor: pointer;

  width: 100%;
  ${adaptive('height', 116, 58, 0)}
  ${adaptive('margin-bottom', 40, 20, 0)}

  &::placeholder {
    color: ${theme.color.black};
    font-family: Inter;
    ${adaptive('font-size', 16, 14, 0)}
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */

    opacity: 1;
  }
`;

export const SendBtn = styled.button`
  display: block;

  color: #fbfbfb;
  font-family: Inter;
  ${adaptive('font-size', 16, 14, 0)}
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  letter-spacing: -0.16px;

  border: none;
  padding: 16px;
  border-radius: 30px;
  background: #fc832c;
  width: 100%;
  margin: 0 auto;

  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #f37113;
  }
`;

export const AttentionForm = styled.p`
  color: red;
  font-family: Inter;
  ${adaptive('font-size', 16, 14, 0)}
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
`;
