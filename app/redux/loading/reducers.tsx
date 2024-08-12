import loadingActionTypes from './constants';

import { ReducerFunctionType, StateType } from '../../types/index';

const initialState: StateType<Boolean> = false

const loading: ReducerFunctionType<typeof initialState, Boolean, Boolean> = (state = initialState, action) => {
  switch (action.type) {
    case loadingActionTypes.SET_LOADING:
      return action.payload;

    case loadingActionTypes.RESET_LOADING:
      return initialState;

    default:
      return state;
  }
};

export default loading;
