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
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
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
        state.psychologists = state.loadedPsychologists.slice(
          0,
          state.itemsPerPage
        );
      })
      .addCase(fetchPsychologists.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(loadMorePsychologists.fulfilled, (state, action) => {
        state.psychologists = [...state.psychologists, ...action.payload];
        state.currentPage += 1;
      });
  },
});

export const { setCurrentPage, setSortBy } = psychologistsSlice.actions;

export default psychologistsSlice.reducer;
