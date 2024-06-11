import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { adaptive } from 'utils/adaptive';

export const HeaderStyled = styled.header`
  position: fixed;
  z-index: 4;

  width: 100%;

  ${adaptive('padding-top', 24, 12, 0)}
  background: ${props => (props.$isHomePage ? '#FBFBFB' : '#F3F3F3')};

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    ${adaptive('margin-top', 26, 13, 0)}
    background: rgba(25, 26, 21, 0.1);
  }
`;

export const NavBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  ${adaptive('gap', 8, 16, 0)}

  @media screen and (min-width: 1100px) {
    flex-direction: row;
  }
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${adaptive('gap', 14, 7, 0)}
`;

export const AuthBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${adaptive('gap', 28, 20, 0)}

  @media screen and (min-width: 1100px) {
    flex-direction: row;
  }
`;

export const Logo = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: #fc832c;
  font-family: Inter;
  ${adaptive(' font-size', 20, 18, 0)}
  line-height: 24px;
  letter-spacing: -0.4px;

  span:first-child {
    font-weight: 700;
  }

  span:nth-child(2) {
    color: #fc832c;
    font-weight: 500;
  }

  span:last-child {
    color: #191a15;
    font-weight: 600;
  }

  transition: scale 250ms linear;

  &:hover,
  &:focus {
    scale: 1.1;
  }
`;

export const LogoMobile = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: #fc832c;
  font-family: Inter;
  ${adaptive(' font-size', 20, 18, 0)}
  line-height: 24px;
  letter-spacing: -0.4px;

  span:first-child {
    font-weight: 700;
  }

  span:nth-child(2) {
    color: #fc832c;
    font-weight: 500;
  }

  span:last-child {
    color: #191a15;
    font-weight: 600;
  }

  @media screen and (min-width: 1101px) {
    display: none;
  }
`;

const BaseButton = styled.button`
  font-family: Inter;
  font-style: normal;
  ${adaptive(' font-size', 16, 16, 0)}
  font-weight: 500;
  line-height: 20px; /* 125% */
  letter-spacing: -0.16px;
  border-radius: 30px;
  padding: calc(7px + (14 - 7) * ((100vw - 375px) / (1440 - 375)));
  border: none;
  cursor: pointer;

  ${adaptive('width', 135, 135, 0)}
`;

export const ButtonLoginLogout = styled(BaseButton)`
  color: #191a15;
  border: 1px solid rgba(25, 26, 21, 0.2);
  background-color: inherit;
`;

export const ButtonRegister = styled(BaseButton)`
  color: #fbfbfb;
  background: #fc832c;
  padding: calc(7px + (14 - 7) * ((100vw - 375px) / (1440 - 375)));

  @media screen and (min-width: 1100px) {
    ${adaptive('width', 171, 85, 0)}
  }
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
`;

export const UserName = styled.span`
  color: #191a15;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  letter-spacing: -0.16px;
`;

export const NavigationAuthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
