import { configureStore } from '@reduxjs/toolkit';
import {
  favoritesReducer,
  initializeFavorites,
} from './psychologists/favoriteReducer';
import psychoReducer from './psychologists/psychoReducer';
import authReducer from './auth/authReducer';

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    psychologists: psychoReducer,
    auth: authReducer,
  },
});

store.dispatch(initializeFavorites());

export default store;
