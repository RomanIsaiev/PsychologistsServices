import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  padding-top: 24px;

  &::after {
    content: '';
    display: block;

    width: 100%;
    height: 1px;

    margin-top: 26px;

    background: rgba(25, 26, 21, 0.1);
  }
`;

export const NavBox = styled.div`
  display: flex;
  align-items: center;
  gap: 226px;
`;

export const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const AuthBox = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

export const Logo = styled(NavLink)`
  text-decoration: none;
  color: #fc832c;
  font-family: Inter;
  font-size: 20px;
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
`;

const BaseButton = styled.button`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  letter-spacing: -0.16px;
  border-radius: 30px;
  padding: 14px 39px;
  border: none;
  cursor: pointer;
`;

export const ButtonLoginLogout = styled(BaseButton)`
  color: #191a15;
  border: 1px solid rgba(25, 26, 21, 0.2);
  background-color: inherit;
`;

export const ButtonRegister = styled(BaseButton)`
  color: #fbfbfb;
  background: #fc832c;
  padding: 14px 40px;
`;
