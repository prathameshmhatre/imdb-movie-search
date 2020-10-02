import { createSlice } from '@reduxjs/toolkit';
// const querystring = require('querystring');

export const counterSlice = createSlice({
  name: 'movie',
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    list: (state, action) => {
      state.list = action.payload;
    },
    loading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { list, loading } = counterSlice.actions;

export const getList = (data) => async (dispatch) => {
  const q = data ? data : '';
  dispatch(loading(true));
  try {
    let response = await fetch('/api/movies?q=' + q);
    response = await response.json();
    dispatch(list(response));
    dispatch(loading(false));
  } catch (error) {
    dispatch(loading(false));
  }
};
export default counterSlice.reducer;
