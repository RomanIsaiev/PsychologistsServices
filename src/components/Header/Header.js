import { Navigation } from 'components/Navigation/Navigation';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">
          psychologists.<span>services</span>
        </NavLink>

        <Navigation />
      </nav>
    </header>
  );
};
