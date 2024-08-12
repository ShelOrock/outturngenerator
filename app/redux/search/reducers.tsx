import searchActionTypes from './constants';

import {
  Search,
  ReducerFunctionType,
  StateType
} from '../../types';

const initialState: StateType<Search[]> = [];

const search: ReducerFunctionType<typeof initialState, Search[], Search[]> = (state = initialState, action) => {
  switch(action.type) {
    case searchActionTypes.SET_SEARCH:
      return action.payload;

    case searchActionTypes.RESET_SEARCH:
      return initialState;

    default: return state;
  };
};

export default search;
