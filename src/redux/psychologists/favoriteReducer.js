import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: JSON.parse(localStorage.getItem('favorites')) || [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const psychologist = action.payload;
      const exists = state.items.some(item => item.name === psychologist.name);
      if (!exists) {
        state.items.push(psychologist);
        localStorage.setItem('favorites', JSON.stringify(state.items));
      }
    },
    removeFavorite: (state, action) => {
      const psychologist = action.payload;
      state.items = state.items.filter(item => item.name !== psychologist.name);
      localStorage.setItem('favorites', JSON.stringify(state.items));
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
