import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Login } from 'components/Login/Login';
import { Navigation } from 'components/Navigation/Navigation';
import { Signup } from 'components/Singup/Singup';
import { auth } from 'api/firebase/firebase';
import {
  AuthBox,
  ButtonLoginLogout,
  ButtonRegister,
  ButtonsBox,
  HeaderStyled,
  Logo,
  NavBox,
  UserBox,
} from './Header.styled';

const IMAGE_BASE_URL = process.env.PUBLIC_URL + '/images';

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
    <HeaderStyled>
      <div className="container">
        <div>
          <NavBox>
            <Logo to="/">
              psychologists<span>.</span>
              <span>services</span>
            </Logo>

            <Navigation currentUser={currentUser} />

            <div>
              {currentUser ? (
                <AuthBox>
                  <UserBox>
                    <img
                      src={
                        currentUser.photoURL ||
                        `${IMAGE_BASE_URL}/default/default-avatar.png`
                      }
                      alt="User Avatar"
                      width="40"
                      height="40"
                    />
                    <span> {currentUser.displayName}</span>
                  </UserBox>
                  <div>
                    <ButtonLoginLogout type="button" onClick={handleLogout}>
                      Log out
                    </ButtonLoginLogout>
                  </div>
                </AuthBox>
              ) : (
                <ButtonsBox>
                  <ButtonLoginLogout type="button" onClick={openLoginModal}>
                    Log in
                  </ButtonLoginLogout>
                  <ButtonRegister type="button" onClick={openRegistrationModal}>
                    Registration
                  </ButtonRegister>
                </ButtonsBox>
              )}
            </div>
          </NavBox>
        </div>
      </div>
    </HeaderStyled>
  );
};
