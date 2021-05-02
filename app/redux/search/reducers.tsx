import { SET_SEARCH, RESET_SEARCH } from './constants';

import {
  Search,
  ReducerFunctionType,
  State
} from '../../types';

const initialState: State<Search> = [];

export const search: ReducerFunctionType<typeof initialState, Search> = (state = initialState, action) => {
  switch(action.type) {
    case SET_SEARCH: return action.payload;
    case RESET_SEARCH: return [] as Search;
    default: return state;
  };
};