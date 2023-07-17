import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { Action } from "redux";
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducer";

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;


export const wrapper = createWrapper<AppStore>(makeStore);
