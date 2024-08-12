import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { StateType } from "."

import AppReducer from '../../redux';
import store from '../../redux/store';

export type RootState = ReturnType<typeof AppReducer>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export type ThunkFunctionType<ReturnType = void> = (...args: Parameters<any>) => AppThunk<ReturnType>;

export type AppDispatchType = typeof store.dispatch;

export type DispatchFunctionType = ThunkDispatch<
  StateType<any>,
  undefined,
  AnyAction
>;
