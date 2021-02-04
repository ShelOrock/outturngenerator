import { RESET_STORE } from './constants';
import appReducer from '../index';

import { ReducerFunctionType, RootState } from '../../types/index';

export const rootReducer: ReducerFunctionType<RootState, RootState> = (state, action) => {
  switch (action.type) {
    case RESET_STORE:
      state = undefined;
      return appReducer(state, action);

    default: return appReducer(state, action);
  }
};
