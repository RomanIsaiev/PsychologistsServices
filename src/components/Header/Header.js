import { Login } from 'components/Login/Login';
import { Navigation } from 'components/Navigation/Navigation';
import { Signup } from 'components/Singup/Singup';
import { NavLink } from 'react-router-dom';

export const Header = ({ openModal, closeModal }) => {
  const openLoginModal = () => {
    openModal(<Login onClose={closeModal} />);
  };

  const openRegistrationModal = () => {
    openModal(<Signup onClose={closeModal} />);
  };

  return (
    <header>
      <nav>
        <NavLink to="/">
          psychologists.<span>services</span>
        </NavLink>

        <Navigation />

        <div>
          <button type="button" onClick={openLoginModal}>
            Log in
          </button>
          <button type="button" onClick={openRegistrationModal}>
            Registration
          </button>
        </div>
      </nav>
    </header>
  );
};
