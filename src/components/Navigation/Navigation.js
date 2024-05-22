import { Nav, StyledNavLink } from './Navigation.styled';

export const Navigation = ({ currentUser }) => {
  return (
    <Nav>
      <ul>
        <li>
          <StyledNavLink to="/" activeclassname="active">
            Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/psychologists" activeclassname="active">
            Psychologists
          </StyledNavLink>
        </li>
        {currentUser && (
          <li>
            <StyledNavLink to="/favorites" activeclassname="active">
              Favorites
            </StyledNavLink>
          </li>
        )}
      </ul>
    </Nav>
  );
};
