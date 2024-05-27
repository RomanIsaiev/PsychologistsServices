import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchDataFromDatabase } from './api';

export const fetchPsychologists = createAsyncThunk(
  'psychologists/fetchPsychologists',
  async () => {
    const data = await fetchDataFromDatabase('/');
    return data;
  }
);

export const loadMorePsychologists = createAsyncThunk(
  'psychologists/loadMorePsychologists',
  async (_, { getState }) => {
    const { currentPage, itemsPerPage } = getState().psychologists;
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const data = await fetchDataFromDatabase('/');
    return data.slice(startIndex, endIndex);
  }
);

const initialState = {
  psychologists: [],
  loadedPsychologists: [],
  currentPage: 1,
  itemsPerPage: 3,
  status: 'idle',
  error: null,
  sortBy: 'all',
};

const psychologistsSlice = createSlice({
  name: 'psychologists',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
      state.psychologists = sortPsychologists(
        state.loadedPsychologists,
        action.payload
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPsychologists.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPsychologists.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loadedPsychologists = action.payload;
        state.psychologists = sortPsychologists(
          action.payload.slice(0, state.itemsPerPage),
          state.sortBy
        );
      })
      .addCase(fetchPsychologists.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(loadMorePsychologists.fulfilled, (state, action) => {
        state.psychologists = sortPsychologists(
          [...state.psychologists, ...action.payload],
          state.sortBy
        );
        state.currentPage += 1;
      });
  },
});

const sortPsychologists = (psychologists, sortBy) => {
  switch (sortBy) {
    case 'name_asc':
      return [...psychologists].sort((a, b) => a.name.localeCompare(b.name));
    case 'name_desc':
      return [...psychologists].sort((a, b) => b.name.localeCompare(a.name));
    case 'price_high_low':
      return [...psychologists].sort(
        (a, b) => b.price_per_hour - a.price_per_hour
      );
    case 'price_low_high':
      return [...psychologists].sort(
        (a, b) => a.price_per_hour - b.price_per_hour
      );
    case 'popular':
      return [...psychologists].sort((a, b) => b.rating - a.rating);
    case 'not_popular':
      return [...psychologists].sort((a, b) => a.rating - b.rating);
    case 'all':
    default:
      return psychologists;
  }
};

export const { setCurrentPage, setSortBy } = psychologistsSlice.actions;

export default psychologistsSlice.reducer;
