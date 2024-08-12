import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import AppReducer from '.';
import store from './store';

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

export interface ActionTypes<PayloadType = {}> {
  entity?: string;
  type: string | symbol;
  payload?: PayloadType;
}

export type ActionFunctionType<PayloadType = {}> = (entity?: string, payload?: PayloadType) => ActionTypes<PayloadType>

export type StateType<InitialStateType> = InitialStateType;

export type ReducerFunctionType<InitialStateType, ReturnType, PayloadType = {}> = (state: StateType<InitialStateType>, action: ActionTypes<PayloadType>) => ReturnType;
