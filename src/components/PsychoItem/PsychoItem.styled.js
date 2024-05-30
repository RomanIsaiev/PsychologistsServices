import styled from 'styled-components';
import { theme } from 'vars';

export const Item = styled.li`
  border-radius: 24px;
  background: #fbfbfb;
`;

export const FlexWrapper = styled.div`
  position: relative;

  padding: 24px;
  display: flex;
  gap: 24px;
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
`;

export const OnlineIcon = styled.img`
  position: absolute;
  right: 14px;
  top: 9px;

  z-index: 2;
`;

export const CardTitle = styled.span`
  color: #8a8a89;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */

  margin-bottom: 8px;
`;

export const Name = styled.h3`
  color: ${theme.color.black};
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 100% */

  margin-bottom: 24px;
`;

export const ExpertiseList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;

  margin-bottom: 24px;
`;

export const ExpertiseItem = styled.li`
  color: #8a8a89;
  font-family: Inter;
  font-size: 16px;
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
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */

  margin-bottom: 14px;
`;

export const ExpendedBtn = styled.button`
  display: block;

  color: #191a15;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  text-decoration-line: underline;

  background-color: inherit;
  border: none;
`;

export const RatingPriceContainer = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;

  display: flex;
  align-items: center;
`;

export const FlexRating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-right: 16px;
`;

export const PriceContainer = styled.div`
  margin-left: 16px;
  margin-right: 28px;
`;

export const Price = styled.p`
  color: #191a15;
  font-family: Inter;
  font-size: 16px;
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
`;

export const ReviewWrapper = styled.ul`
  margin-bottom: 40px;
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
  font-size: 16px;
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
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
`;

export const AppoBtn = styled.button`
  color: #fbfbfb;
  font-family: Inter;
  font-size: 16px;
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
`;
