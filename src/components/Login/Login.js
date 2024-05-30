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
        navigate('/psychologists');
        console.log(user);
        onClose();
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
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
          {errors.email && <p>{errors.email.message}</p>}
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
          {errors.password && <p>{errors.password.message}</p>}
        </PasswordBox>
        <ModalButton type="submit">Log in</ModalButton>
      </ModalForm>
    </div>
  );
};
