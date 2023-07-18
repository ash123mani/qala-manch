import { createAsyncThunk } from '@reduxjs/toolkit'
import { UserPayload, UserResponse } from "@qala-manch/types";
import { CREATE_USER } from "@/gql-client/queries";
import gqlClient from '@/gql-client'
import userSlice from './index'

export const createUser = createAsyncThunk<UserResponse, UserPayload>(
  "user/createUser",
  async ({ userName }, thunkAPI) => {
    const { actions } = userSlice;
    thunkAPI.dispatch(actions.createUserStart());
    const resp = await gqlClient.mutate<UserPayload, UserResponse>("createUser", CREATE_USER, {
      userName,
    });
    thunkAPI.dispatch(actions.createUserSuccess(resp));
    return resp as UserResponse;
  }
);
