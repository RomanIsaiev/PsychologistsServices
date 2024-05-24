import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './psychologists/reducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
