import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { adaptive } from 'utils/adaptive';
import { theme } from 'vars';

export const SectionHome = styled.section`
  ${adaptive('padding-top', 156, 78, 0)}
  ${adaptive('padding-bottom', 156, 78, 0)}
`;

export const HomeFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  ${adaptive('gap', 125, 30, 0)}

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const HomeTitle = styled.h1`
  color: #191a15;
  font-family: Inter;
  ${adaptive('font-size', 80, 49, 0)}
  font-style: normal;
  font-weight: 600;
  ${adaptive('line-height', 82, 45, 0)}
  ${adaptive('letter-spacing', -1.6, -1, 0)}

  ${adaptive('width', 595, 356, 0)}
  margin-bottom: 20px;

  span {
    color: #fc832c;
    font-style: italic;
  }
`;

export const HomeDesc = styled.p`
  color: #191a15;
  font-family: Inter;
  ${adaptive('font-size', 18, 15, 0)}
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.36px;

  ${adaptive('width', 510, 344, 0)}
  ${adaptive('margin-bottom', 40, 30, 0)}
`;

export const ExpContainer = styled.div`
  position: relative;
`;

export const StartButton = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  ${adaptive('gap', 18, 9, 0)}

  color: #fbfbfb;
  font-family: Inter;
  ${adaptive('font-size', 20, 15, 0)}
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 120% */
  letter-spacing: -0.2px;

  ${adaptive('max-width', 236, 180, 0)}
  width: 100%;

  padding: calc(12px + (18 - 12) * ((100vw - 375px) / (1440 - 375)))
    calc(12px + (24 - 12) * ((100vw - 375px) / (1440 - 375)));
  border-radius: 30px;
  background: ${theme.color.orange};

  transition: background 250ms linear;

  &:hover {
    background: ${theme.color.hover};
  }
`;

export const ExpBlock = styled.div`
  position: absolute;
  ${adaptive('left', -101, -50, 0)}
  ${adaptive('bottom', 75, 29, 0)}

  display: flex;
  align-items: center;
  justify-content: center;
  ${adaptive('gap', 16, 8, 0)}

  ${adaptive('padding', 32, 20, 0)}
  border-radius: 20px;
  background: #fc832c;
  ${adaptive('width', 311, 238, 0)}
`;

export const ExpIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${adaptive('width', 54, 34, 0)}
  ${adaptive('height', 54, 34, 0)}
  ${adaptive('border-radius', 13, 8, 0)}
  background: #fbfbfb;
`;

export const ExpIcon = styled.img`
  ${adaptive('width', 30, 19, 0)}
  ${adaptive('height', 30, 19, 0)}
`;

export const ExpInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  ${adaptive('gap', 8, 4, 0)}
`;

export const ExpText = styled.div`
  color: rgba(251, 251, 251, 0.5);
  font-family: Inter;
  ${adaptive('font-size', 14, 12, 0)}
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ExpNumber = styled.span`
  display: block;

  color: #fbfbfb;
  font-family: Inter;
  ${adaptive('font-size', 24, 16, 0)}
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const PeopleIconBox = styled.div`
  position: absolute;
  ${adaptive('right', -35, -18, 0)}
  ${adaptive('top', 40, 20, 0)}

  display: flex;
  align-items: center;
  justify-content: center;

  ${adaptive('width', 48, 36, 0)}
  ${adaptive('height', 48, 36, 0)}
  border-radius: 10px;
  background-color: #fbc75e;

  transform: rotate(15deg);
`;

export const PeopleIcon = styled.img`
  transform: rotate(-15deg);
`;

export const QuestionIconBox = styled.div`
  position: absolute;
  ${adaptive('top', 185, 93, 0)}
  ${adaptive('left', -29, -18, 0)}

  display: flex;
  align-items: center;
  justify-content: center;

  ${adaptive('width', 40, 32, 0)}
  ${adaptive('height', 40, 32, 0)}
  border-radius: 10px;
  background-color: #54be96;

  transform: rotate(-15deg);
`;

export const QuestionIcon = styled.img`
  transform: rotate(15deg);
`;

export const MainImage = styled.img`
  ${adaptive('width', 464, 305, 0)}
  ${adaptive('height', 529, 345, 0)}
  border-radius: 10px;
`;
