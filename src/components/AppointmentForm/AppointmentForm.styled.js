import styled from 'styled-components';
import { theme } from 'vars';

export const PsychologistContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  margin-bottom: 40px;
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
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
`;

export const PhoneTimeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 16px;
  margin-bottom: 16px;
  gap: 8px;
`;

export const PhoneInput = styled.input`
  padding: 16px 18px;
  border-radius: 12px;
  border: 1px solid rgba(25, 26, 21, 0.1);
  background: ${theme.color.white};

  width: 232px;
  height: 52px;

  &::placeholder {
    color: ${theme.color.black};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */

    opacity: 1;
  }
`;

export const TimeInput = styled.input`
  padding: 16px 18px;
  border-radius: 12px;
  border: 1px solid rgba(25, 26, 21, 0.1);
  background: ${theme.color.white};

  width: 232px;
  height: 52px;

  &::placeholder {
    color: ${theme.color.black};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */

    opacity: 1;
  }
`;

export const CommentInput = styled.textarea`
  margin-top: 16px;

  padding: 16px 18px;
  border-radius: 12px;
  border: 1px solid rgba(25, 26, 21, 0.1);
  background: ${theme.color.white};
  resize: none;

  width: 472px;
  height: 116px;

  margin-bottom: 40px;

  &::placeholder {
    color: ${theme.color.black};
    font-family: Inter;
    font-size: 16px;
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
  font-size: 16px;
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
`;

export const AttentionForm = styled.p`
  color: red;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
`;
