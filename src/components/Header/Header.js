import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Login } from 'components/Login/Login';
import { Navigation } from 'components/Navigation/Navigation';
import { Signup } from 'components/Singup/Singup';
import { auth } from 'api/firebase/firebase';
import { slide as Menu } from 'react-burger-menu';
import {
  AuthBox,
  ButtonLoginLogout,
  ButtonRegister,
  ButtonsBox,
  HeaderStyled,
  Logo,
  LogoMobile,
  NavigationAuthContainer,
  UserAvatar,
  UserBox,
  UserName,
} from './Header.styled';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authReducer';

const IMAGE_BASE_URL = process.env.PUBLIC_URL + '/images';

export const Header = ({ openModal, closeModal }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1100);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
      dispatch(logout());
      localStorage.removeItem('currentUid');
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const isHomePage = location.pathname === '/';

  const isMenuOpen = function (state) {
    return state.isOpen;
  };

  return (
    <HeaderStyled $isHomePage={isHomePage}>
      <div className="container">
        {!isMobile && (
          <NavigationAuthContainer>
            <Logo to="/">
              psychologists<span>.</span>
              <span>services</span>
            </Logo>
            <Navigation currentUser={currentUser} />
            {currentUser ? (
              <AuthBox>
                <UserBox>
                  <UserAvatar
                    src={
                      currentUser.photoURL ||
                      `${IMAGE_BASE_URL}/default/default-avatar.png`
                    }
                    alt="User Avatar"
                    width="40"
                    height="40"
                  />
                  <UserName>{currentUser.displayName}</UserName>
                </UserBox>
                <div>
                  <ButtonLoginLogout
                    type="button"
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    Log out
                  </ButtonLoginLogout>
                </div>
              </AuthBox>
            ) : (
              <ButtonsBox>
                <ButtonLoginLogout
                  type="button"
                  onClick={() => {
                    openLoginModal();
                  }}
                >
                  Log in
                </ButtonLoginLogout>
                <ButtonRegister
                  type="button"
                  onClick={() => {
                    openRegistrationModal();
                  }}
                >
                  Registration
                </ButtonRegister>
              </ButtonsBox>
            )}
          </NavigationAuthContainer>
        )}

        <LogoMobile to="/">
          psychologists<span>.</span>
          <span>services</span>
        </LogoMobile>
        {isMobile && (
          <Menu
            right
            onStateChange={isMenuOpen}
            pageWrapId={'page-wrap'}
            outerContainerId={'outer-container'}
            customBurgerIcon={
              <img
                src={`${IMAGE_BASE_URL}/svg/hamburger.svg`}
                alt="mobile menu"
              />
            }
            customCrossIcon={
              <img src={`${IMAGE_BASE_URL}/svg/close-modal.svg`} alt="close" />
            }
          >
            <NavigationAuthContainer>
              <Navigation currentUser={currentUser} />
              {currentUser ? (
                <AuthBox>
                  <UserBox>
                    <UserAvatar
                      src={
                        currentUser.photoURL ||
                        `${IMAGE_BASE_URL}/default/default-avatar.png`
                      }
                      alt="User Avatar"
                      width="40"
                      height="40"
                    />
                    <UserName>{currentUser.displayName}</UserName>
                  </UserBox>
                  <div>
                    <ButtonLoginLogout
                      type="button"
                      onClick={() => {
                        handleLogout();
                      }}
                    >
                      Log out
                    </ButtonLoginLogout>
                  </div>
                </AuthBox>
              ) : (
                <ButtonsBox>
                  <ButtonLoginLogout
                    type="button"
                    onClick={() => {
                      openLoginModal();
                    }}
                  >
                    Login
                  </ButtonLoginLogout>
                  <ButtonRegister
                    type="button"
                    onClick={() => {
                      openRegistrationModal();
                    }}
                  >
                    Registration
                  </ButtonRegister>
                </ButtonsBox>
              )}
            </NavigationAuthContainer>
          </Menu>
        )}
      </div>
    </HeaderStyled>
  );
};
