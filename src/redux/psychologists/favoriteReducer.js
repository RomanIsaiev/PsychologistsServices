import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.items.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter(item => item._id !== action.payload);
    },
    initializeFavorites: state => {
      const storedFavorites =
        JSON.parse(localStorage.getItem('favorites')) || [];
      state.items = storedFavorites;
    },
  },
});

export const { addFavorite, removeFavorite, initializeFavorites } =
  favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
