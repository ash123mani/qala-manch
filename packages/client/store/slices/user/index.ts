import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NetworkStatus } from '@/utils/types';

interface UserState {
  user: object;
  createUser: {
    fetchStatus: NetworkStatus;
    error: string;
  }
}

const initialState: UserState = {
  user: {},
  createUser: {
    fetchStatus: 'idle',
    error: ''
  }
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUserStart: (state) => {
      state.createUser.fetchStatus = 'pending';
    },
    createUserSuccess: (state, action) => {
      state.user = action.payload;
      state.createUser.fetchStatus = 'succeeded';
    },
    createUserFailure: (state, action) => {
      state.createUser.fetchStatus = 'failed';
    }
  }
});

export default userSlice;

