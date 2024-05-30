import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  isAuthenticated: false,
  user: null,
};

const persistedAuth = localStorage.getItem('auth');
if (persistedAuth) {
  initialState = JSON.parse(persistedAuth);
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = {
        uid: action.payload.uid,
        email: action.payload.email,
        displayName: action.payload.displayName,
      };
      localStorage.setItem('auth', JSON.stringify(state));
    },
    logout: state => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('auth');
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
