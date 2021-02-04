import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import AppReducer from '../../redux/index';

export type RootState = ReturnType<typeof AppReducer>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<Symbol>
>;
