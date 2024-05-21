import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from 'api/firebase/firebase';

export const Signup = ({ onClose }) => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(user, { displayName: name });
      console.log(user);
      navigate('/psychologists');
      onClose();
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  return (
    <div>
      <p>Registration</p>
      <p>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="user-name">Name</label>
          <input
            id="user-name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            placeholder="Name"
          />
        </div>

        <div>
          <label htmlFor="email-address">Email address</label>
          <input
            id="email-address"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="Email address"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
