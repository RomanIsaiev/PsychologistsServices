import { configureStore } from '@reduxjs/toolkit';

import psychoReducer from './psychologists/psychoReducer';
import { favoritesReducer } from './psychologists/favoriteReducer';

const store = configureStore({
  reducer: {
    psychologists: psychoReducer,
    favorites: favoritesReducer,
  },
});

export default store;
