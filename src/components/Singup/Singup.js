import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'api/firebase/firebase';

export const Signup = ({ onClose }) => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async e => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password, name)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(user);
        navigate('/psychologists');
        onClose();
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <p>Registration</p>
      <p>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>
      <form>
        <div>
          <label htmlFor="user-name">Name</label>
          <input
            type="text"
            label="User name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            placeholder="Name"
          />
        </div>

        <div>
          <label htmlFor="email-address">Email address</label>
          <input
            type="email"
            label="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="Email address"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            label="Create password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>

        <button type="submit" onClick={onSubmit}>
          Sign Up
        </button>
      </form>
    </div>
  );
};
