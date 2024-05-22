import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'vars';

export const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  li {
    margin-right: 10px;
    position: relative;
    padding-bottom: 5px;
  }

  .active {
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 50%;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: ${theme.color.orange};

      transform: translate(-50%);
    }
  }
`;

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
