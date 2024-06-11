import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from 'api/firebase/firebase';
import {
  EyeButton,
  EyeIcon,
  Input,
  ModalButton,
  ModalDesc,
  ModalForm,
  ModalTitle,
  PasswordBox,
} from 'components/Singup/Singup.styled';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authReducer';
import {
  initializeFavorites,
  setUid,
} from '../../redux/psychologists/favoriteReducer';
import { AttentionForm } from 'components/AppointmentForm/AppointmentForm.styled';
import { toast } from 'react-toastify';

const IMAGE_BASE_URL = process.env.PUBLIC_URL + '/images';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

export const Login = ({ onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = data => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(userCredential => {
        const user = userCredential.user;
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
        dispatch(setUid(user.uid));
        dispatch(initializeFavorites());
        localStorage.setItem('userId', user.uid);
        navigate('/psychologists');
        onClose();
      })
      .catch(error => {
        if (error.code === 'auth/wrong-password') {
          toast.warn('Incorrect password');
        } else if (error.code === 'auth/user-not-found') {
          toast.warn('No user found with this email');
        } else if (error.code === 'auth/invalid-email') {
          toast.warn('Invalid email address');
        } else if (error.code === 'auth/user-disabled') {
          toast.warn('User account is disabled');
        } else {
          toast.warn('Login failed. Please try again.');
        }
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <ModalTitle>Login</ModalTitle>
      <ModalDesc>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a psychologist.
      </ModalDesc>
      <ModalForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            id="email-address"
            {...register('email')}
            type="email"
            placeholder="Email"
          />
          {errors.email && (
            <AttentionForm>{errors.email.message}</AttentionForm>
          )}
        </div>
        <PasswordBox>
          <Input
            id="password"
            {...register('password')}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
          />
          <EyeButton type="button" onClick={togglePasswordVisibility}>
            {showPassword ? (
              <EyeIcon
                src={`${IMAGE_BASE_URL}/svg/eye-on.svg`}
                alt="hide password"
                width="20"
                height="20"
              />
            ) : (
              <EyeIcon
                src={`${IMAGE_BASE_URL}/svg/eye-off.svg`}
                alt="show password"
                width="20"
                height="20"
              />
            )}
          </EyeButton>
          {errors.password && (
            <AttentionForm>{errors.password.message}</AttentionForm>
          )}
        </PasswordBox>
        <ModalButton type="submit">Log in</ModalButton>
      </ModalForm>
    </div>
  );
};
