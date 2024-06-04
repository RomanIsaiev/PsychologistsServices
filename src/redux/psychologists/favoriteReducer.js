import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    uid: null,
    items: [],
  },
  reducers: {
    setUid: (state, action) => {
      state.uid = action.payload;
      localStorage.setItem('currentUid', state.uid);
    },
    initializeFavorites: state => {
      const uid = state.uid || localStorage.getItem('currentUid');
      if (uid) {
        state.uid = uid;
        state.items =
          JSON.parse(localStorage.getItem(`favorites-${uid}`)) || [];
      }
    },
    addFavorite: (state, action) => {
      const psychologist = action.payload;
      const exists = state.items.some(item => item.name === psychologist.name);
      if (!exists) {
        state.items.push(psychologist);
        localStorage.setItem(
          `favorites-${state.uid}`,
          JSON.stringify(state.items)
        );
      }
    },
    removeFavorite: (state, action) => {
      const psychologist = action.payload;
      state.items = state.items.filter(item => item.name !== psychologist.name);
      localStorage.setItem(
        `favorites-${state.uid}`,
        JSON.stringify(state.items)
      );
    },
  },
});

export const { addFavorite, removeFavorite, initializeFavorites, setUid } =
  favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
