import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { adaptive } from 'utils/adaptive';
import { theme } from 'vars';

export const SectionHome = styled.section`
  ${adaptive('padding-top', 78, 21, 0)}
`;

export const HomeFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${adaptive('gap', 125, 32, 0)}
`;

export const HomeTitle = styled.h1`
  color: #191a15;
  font-family: Inter;
  ${adaptive('font-size', 80, 20, 0)}
  font-style: normal;
  font-weight: 600;
  ${adaptive('line-height', 82, 21, 0)}
  ${adaptive('letter-spacing', -1.6, -0.8, 0)}

  ${adaptive('width', 595, 195, 0)}
  margin-bottom: 20px;
  ${adaptive('margin-bottom', 20, 10, 0)}

  span {
    color: #fc832c;
    font-style: italic;
  }
`;

export const HomeDesc = styled.p`
  color: #191a15;
  font-family: Inter;
  ${adaptive('font-size', 18, 9, 0)}
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.36px;

  ${adaptive('width', 510, 155, 0)}

  ${adaptive('margin-bottom', 40, 20, 0)}
`;

// image container

export const ExpContainer = styled.div`
  position: relative;
`;

export const StartButton = styled(NavLink)`
  display: flex;
  align-items: center;
  ${adaptive('gap', 18, 9, 0)}

  color: #fbfbfb;
  font-family: Inter;
  ${adaptive('font-size', 20, 11, 0)}
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 120% */
  letter-spacing: -0.2px;

  max-width: 236px;
  ${adaptive('max-width', 236, 118, 0)}
  width: 100%;

  padding: calc(9px + (18 - 9) * ((100vw - 375px) / (1440 - 375)))
    calc(24px + (48 - 24) * ((100vw - 375px) / (1440 - 375)));
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
  ${adaptive('left', -101, -50, 0)}
  ${adaptive('bottom', 75, 37, 0)}

  display: flex;
  align-items: center;
  justify-content: center;
  ${adaptive('gap', 16, 8, 0)}

  padding: 32px;
  ${adaptive('padding', 32, 10, 0)}
  border-radius: 20px;
  background: #fc832c;
  ${adaptive('width', 311, 156, 0)}
`;

export const ExpIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 54px;
  height: 54px;
  ${adaptive('width', 54, 27, 0)}
  ${adaptive('height', 54, 27, 0)}
  border-radius: 13px;
  background: #fbfbfb;
`;

export const ExpIcon = styled.img`
  ${adaptive('width', 30, 15, 0)}
  ${adaptive('height', 30, 15, 0)}
`;

export const ExpInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  ${adaptive('gap', 8, 4, 0)}
`;

export const ExpText = styled.div`
  color: rgba(251, 251, 251, 0.5);
  font-family: Inter;
  font-size: 14px;
  ${adaptive('font-size', 14, 8, 0)}
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ExpNumber = styled.span`
  display: block;

  color: #fbfbfb;
  font-family: Inter;
  font-size: 24px;
  ${adaptive('font-size', 24, 12, 0)}
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

// decoration icons

export const PeopleIconBox = styled.div`
  position: absolute;
  right: -35px;
  top: 40px;
  ${adaptive('right', -35, -18, 0)}
  ${adaptive('top', 40, 20, 0)}

  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;
  ${adaptive('width', 48, 24, 0)}
  ${adaptive('height', 48, 24, 0)}
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
  ${adaptive('top', 185, 93, 0)}
  ${adaptive('left', -29, -18, 0)}

  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  ${adaptive('width', 40, 20, 0)}
  ${adaptive('height', 40, 20, 0)}
  border-radius: 10px;
  background-color: #54be96;

  transform: rotate(-15deg);
`;

export const QuestionIcon = styled.img`
  transform: rotate(15deg);
`;

export const MainImage = styled.img`
  ${adaptive('width', 464, 120, 0)}
  ${adaptive('height', 529, 136, 0)}
`;
