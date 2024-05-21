import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Login } from 'components/Login/Login';
import { Navigation } from 'components/Navigation/Navigation';
import { Signup } from 'components/Singup/Singup';
import { NavLink } from 'react-router-dom';
import { auth } from 'api/firebase/firebase';

import defaultAvatar from '../../images/default/default-avatar.png';

export const Header = ({ openModal, closeModal }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const openLoginModal = () => {
    openModal(<Login onClose={closeModal} />);
  };

  const openRegistrationModal = () => {
    openModal(<Signup onClose={closeModal} />);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header>
      <nav>
        <NavLink to="/">
          psychologists.<span>services</span>
        </NavLink>

        <Navigation />

        <div>
          {currentUser ? (
            <>
              <img
                src={currentUser.photoURL || defaultAvatar}
                alt="User Avatar"
                width="40"
                height="40"
              />
              <span> {currentUser.displayName}</span>
              <button type="button" onClick={handleLogout}>
                Log out
              </button>
            </>
          ) : (
            <>
              <button type="button" onClick={openLoginModal}>
                Log in
              </button>
              <button type="button" onClick={openRegistrationModal}>
                Registration
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};
