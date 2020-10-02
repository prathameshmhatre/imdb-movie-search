import { configureStore } from '@reduxjs/toolkit';
import listReducer from '../features/list/slice';

export default configureStore({
  reducer: {
    movie: listReducer,
  },
});
