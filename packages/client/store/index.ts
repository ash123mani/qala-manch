import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { Action } from "redux";
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import gqlClient from "@/gql-client";
import { createWrapper } from "next-redux-wrapper";
import subjectSlice from "./reducer";

const makeStore = () =>
  configureStore({
    reducer: {
      [subjectSlice.name]: subjectSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        thunk: {
          extraArgument: gqlClient
        }
      });
    },
    devTools: process.env.NODE_ENV !== "production",
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;


export const wrapper = createWrapper<AppStore>(makeStore);
