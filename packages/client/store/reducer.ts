import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import userSlice from './slices/user';

export const hydrationSlice = createSlice({
  name: 'subject',
  initialState: {} as any, 
  reducers: {
    setEnt(_state, action) {
      return action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE', state, action.payload);
      return {
        ...state,
        ...action.payload.subject,
      };
    },
  },
});


export const rootReducer = {
  [hydrationSlice.name]: hydrationSlice.reducer,
  [userSlice.name]: userSlice.reducer
}

export default rootReducer