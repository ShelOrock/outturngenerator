import {
  SET_FILTERS,
  REMOVE_FILTER,
  RESET_FILTERS
} from './constants';

import { ReducerFunctionType, State } from '../../types/index';

const initialState: State<string[]> = [];

export const searchFilters: ReducerFunctionType<typeof initialState, any> = (state = initialState, action) => {
  switch(action.type) {
    case SET_FILTERS: return action.payload;
    case REMOVE_FILTER: return state.filter(filter => filter !== action.payload)
    case RESET_FILTERS: return [];
    default: return state;
  };
};