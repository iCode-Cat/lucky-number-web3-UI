import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  test: 'hello',
};

// createAsyncThunk
export const fetchTest = createAsyncThunk('global/fetchTest', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  return data;
});

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setTest: (state, action) => {
      state.test = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTest.fulfilled, (state, action) => {
      state.test = action.payload.title;
    });
  },
});

export const { setTest } = globalSlice.actions;
export default globalSlice.reducer;
