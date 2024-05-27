import { configureStore } from '@reduxjs/toolkit';
import {
  favoritesReducer,
  initializeFavorites,
} from './psychologists/favoriteReducer';
import psychoReducer from './psychologists/psychoReducer';

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    psychologists: psychoReducer,
  },
});

store.dispatch(initializeFavorites());

export default store;
