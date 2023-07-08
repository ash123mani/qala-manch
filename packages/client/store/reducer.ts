import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

interface SubjectState {
  name: string;
  value: number;
}

const initialState: SubjectState = {
  name: 'test',
  value: 0
}

export const subjectSlice = createSlice({
  name: 'subject',

  initialState,
 
  reducers: {
    setEnt(_state, action) {
      return action.payload;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
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

const { actions, reducer } = subjectSlice;

export default subjectSlice