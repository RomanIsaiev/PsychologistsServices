import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
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
} from './Singup.styled';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { login } from '../../redux/auth/authReducer';
import {
  initializeFavorites,
  setUid,
} from '../../redux/psychologists/favoriteReducer';
import { AttentionForm } from 'components/AppointmentForm/AppointmentForm.styled';

const IMAGE_BASE_URL = process.env.PUBLIC_URL + '/images';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(3, 'must be at least 3 characters long'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

export const Signup = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async data => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await updateProfile(user, { displayName: data.name });
      dispatch(
        login({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      );
      dispatch(setUid(user.uid));
      dispatch(initializeFavorites());
      navigate('/psychologists');
      onClose();
    } catch (error) {
      if (error.code === 'auth/weak-password') {
        toast.warn('Password should be at least 6 characters long');
      } else if (error.code === 'auth/email-already-in-use') {
        toast.warn('Email is already in use');
      } else if (error.code === 'auth/invalid-email') {
        toast.warn('Invalid email address');
      } else if (error.code === 'auth/operation-not-allowed') {
        toast.warn('Operation not allowed');
      } else {
        toast.warn('Registration failed. Please try again.');
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <ModalTitle>Registration</ModalTitle>
      <ModalDesc>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </ModalDesc>
      <ModalForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            id="user-name"
            type="text"
            {...register('name')}
            placeholder="Name"
          />
          {errors.name && <AttentionForm>{errors.name.message}</AttentionForm>}
        </div>
        <div>
          <Input
            id="email-address"
            type="email"
            {...register('email')}
            placeholder="Email"
          />
          {errors.email && (
            <AttentionForm>{errors.email.message}</AttentionForm>
          )}
        </div>
        <PasswordBox>
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
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
        <ModalButton type="submit">Sign Up</ModalButton>
      </ModalForm>
    </div>
  );
};
