import styled from 'styled-components';
import { adaptive } from 'utils/adaptive';
import { theme } from 'vars';

export const PsychoStyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;

  ${adaptive('margin-bottom', 64, 32, 0)}
`;

export const Item = styled.li`
  border-radius: 24px;
  background: #fbfbfb;
  width: 100%;
  margin: 0 auto;
`;

export const ItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  ${adaptive('padding', 24, 16, 0)}

  @media screen and (min-width: 768px) {
    flex-direction: row;
    ${adaptive('gap', 24, 16, 0)}
  }
`;

export const AvatarContainer = styled.div`
  ${adaptive('padding-top', 0, 30, 0)}

  display: flex;
  align-items: center;
  ${adaptive('gap', 24, 12, 0)}

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    gap: 0;
    margin-bottom: 0;
    padding-top: 0;
  }
`;

export const MobilePsychoContainer = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const DesktopPsychoContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const AvatarWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;

  border-radius: 30px;
  border: 2px solid rgba(252, 131, 44, 0.2);
`;

export const PsychoAvatar = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 15px;
  transform: translate(-50%, -50%);
  z-index: 1;

  width: 96px;
  height: 96px;
`;

export const OnlineIcon = styled.img`
  position: absolute;
  right: 14px;
  top: 9px;

  width: 14px;
  height: 14px;

  z-index: 2;
`;

export const CardTitle = styled.span`
  color: #8a8a89;
  font-family: Inter;
  ${adaptive('font-size', 16, 14, 0)}
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */

  margin-bottom: 8px;
`;

export const Name = styled.h3`
  color: ${theme.color.black};
  font-family: Inter;
  ${adaptive('font-size', 24, 18, 0)}
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 100% */

  margin-bottom: 24px;
  ${adaptive('margin-bottom', 24, 12, 0)}
`;

export const ExpertiseList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;

  ${adaptive('margin-bottom', 24, 12, 0)}
`;

export const ExpertiseItem = styled.li`
  color: #8a8a89;
  font-family: Inter;
  ${adaptive('font-size', 16, 14, 0)}
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */

  span {
    color: #191a15;
  }

  padding: 8px 16px;
  border-radius: 24px;
  background: #f3f3f3;
`;

export const Desc = styled.p`
  color: rgba(25, 26, 21, 0.5);
  font-family: Inter;
  ${adaptive('font-size', 16, 14, 0)}
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */

  ${adaptive('margin-bottom', 14, 8, 0)}
`;

export const ExpendedBtn = styled.button`
  display: block;

  color: #191a15;
  font-family: Inter;
  ${adaptive('font-size', 16, 14, 0)}
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */

  text-decoration-line: underline;
  background-color: inherit;
  border: none;
  padding: 0;

  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: #fc832c;
  }
`;

export const RatingPriceContainer = styled.div`
  position: absolute;
  ${adaptive('top', 24, 12, 0)}
  left: 50%;

  transform: translate(-50%);
  ${adaptive('width', 450, 320, 0)}

  display: flex;
  align-items: center;
  justify-content: center;

  ${adaptive('gap', 8, 4, 0)}

  @media screen and (min-width: 500px) {
    ${adaptive('right', 24, 12, 0)}
    left: unset;
    width: unset;
    transform: unset;
    justify-content: unset;
  }
`;

export const RatingDecor = styled.span`
  display: block;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const RatingTitle = styled.p`
  color: #191a15;
  font-family: Inter;
  ${adaptive('font-size', 16, 14, 0)}
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
`;

export const FlexRating = styled.div`
  display: flex;
  align-items: center;
  ${adaptive('gap', 8, 4, 0)}

  margin-right: 0;

  @media screen and (min-width: 768px) {
    margin-right: 16px;
  }
`;

export const StarIcon = styled.img`
  ${adaptive('width', 16, 14, 0)}
  ${adaptive('height', 16, 14, 0)}
`;

export const PriceContainer = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 16px;
    margin-right: 28px;
  }
`;

export const Price = styled.p`
  color: #191a15;
  font-family: Inter;
  ${adaptive('font-size', 16, 14, 0)}
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */

  span {
    color: #38cd3e;
  }
`;

export const FavoriteBtn = styled.button`
  display: block;
  background: none;
  border: none;

  transition: scale 250ms linear;

  &:hover,
  &:focus {
    scale: 1.1;
  }
`;

export const ReviewWrapper = styled.ul`
  ${adaptive('margin-bottom', 40, 20, 0)}
`;

export const ReviewItem = styled.li`
  padding-top: 24px;
`;

export const ReviewUserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  margin-bottom: 18px;
`;

export const ReviewAvatar = styled.div`
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 100px;
  background: rgba(252, 131, 44, 0.2);
`;

export const ReviewAvatarLetter = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  color: #fc832c;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 100% */
`;

export const ReviewUserName = styled.p`
  color: #191a15;
  font-family: Inter;
  ${adaptive('font-size', 16, 14, 0)}
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */

  margin-bottom: 4px;
`;

export const ReviewUserRatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Comment = styled.p`
  color: rgba(25, 26, 21, 0.5);
  font-family: Inter;
  ${adaptive('font-size', 16, 14, 0)}
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
`;

export const AppoBtn = styled.button`
  display: block;
  margin: 0 auto;

  color: #fbfbfb;
  font-family: Inter;
  ${adaptive('font-size', 16, 14, 0)}
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  letter-spacing: -0.16px;
  border-radius: 30px;
  padding: 14px 32px;

  border: none;
  cursor: pointer;

  border-radius: 30px;
  background: #fc832c;

  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #f37113;
  }

  @media screen and (min-width: 500px) {
    margin: 0 0;
  }
`;
