import storeActionTypes from './constants';
import rootReducer from '../index';

import { ReducerFunctionType, RootState } from '../../types/index';

const appReducer: ReducerFunctionType<RootState, RootState> = (state = undefined, action) => {
  switch (action.type) {
    case storeActionTypes.RESET_STORE:
    default:
      return rootReducer(state, action);
  };
};

export default appReducer;
