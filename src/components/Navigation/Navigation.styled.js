import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { adaptive } from 'utils/adaptive';
import { theme } from 'vars';

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  list-style: none;
  padding: 0;
  margin: 0;

  margin-bottom: 50px;

  ${adaptive('gap', 40, 20, 0)}

  @media screen and (min-width: 1100px) {
    flex-direction: row;
    margin-bottom: 0;
  }
`;

export const Nav = styled.nav`
  li {
    position: relative;

    transition: scale 250ms linear;

    &:hover,
    &:focus {
      scale: 1.1;
    }
  }

  .active {
    &::after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: -15px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: ${theme.color.orange};

      @media screen and (min-width: 1100px) {
        bottom: -12px;
        left: 50%;
        width: 10px;
        height: 10px;
        transform: translate(-50%);
      }
    }
  }
`;

export const NavListItem = styled.li``;

export const StyledNavLink = styled(NavLink)`
  color: #191a15;
  font-family: 'Inter';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  letter-spacing: -0.16px;
  text-decoration: none;
`;
