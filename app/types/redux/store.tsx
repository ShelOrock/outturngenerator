import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import AppReducer from '../../redux';
import store from '../../redux/store';

export type RootState = ReturnType<typeof AppReducer>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<Symbol>
>;

export type AppDispatch = typeof store.dispatch;
