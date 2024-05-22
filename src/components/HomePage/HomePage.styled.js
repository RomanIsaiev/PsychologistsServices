import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'vars';

export const SectionHome = styled.section`
  padding-top: 78px;
`;

export const HomeFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 125px;
`;

export const HomeTitle = styled.h1`
  color: #191a15;
  font-family: Inter;
  font-size: 80px;
  font-style: normal;
  font-weight: 600;
  line-height: 82px; /* 102.5% */
  letter-spacing: -1.6px;

  max-width: 595px;
  width: 100%;

  margin-bottom: 20px;

  span {
    color: #fc832c;
    font-style: italic;
  }
`;

export const HomeDesc = styled.p`
  color: #191a15;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.36px;

  max-width: 510px;
  width: 100%;

  margin-bottom: 40px;
`;

// image container

export const ExpContainer = styled.div`
  position: relative;
`;

export const StartButton = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 18px;

  color: #fbfbfb;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 120% */
  letter-spacing: -0.2px;

  max-width: 236px;
  width: 100%;

  padding: 18px 48px;
  border-radius: 30px;
  background: ${theme.color.orange};

  transition: background 250ms linear;

  &:hover {
    background: ${theme.color.hover};
  }
`;

export const ExpBlock = styled.div`
  position: absolute;
  left: -101px;
  bottom: 75px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  padding: 32px;
  border-radius: 20px;
  background: #fc832c;
  max-width: 311px;
  width: 100%;
`;

export const ExpIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 54px;
  height: 54px;
  border-radius: 13px;
  background: #fbfbfb;
`;

export const ExpInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ExpText = styled.div`
  color: rgba(251, 251, 251, 0.5);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ExpNumber = styled.span`
  display: block;

  color: #fbfbfb;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

// decoration icons

export const PeopleIconBox = styled.div`
  position: absolute;
  right: -35px;
  top: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;
  border-radius: 10px;
  background-color: #fbc75e;

  transform: rotate(15deg);
`;

export const PeopleIcon = styled.img`
  transform: rotate(-15deg);
`;

export const QuestionIconBox = styled.div`
  position: absolute;
  top: 185px;
  left: -29px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: #54be96;

  transform: rotate(-15deg);
`;

export const QuestionIcon = styled.img`
  transform: rotate(15deg);
`;
