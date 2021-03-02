import {
  ADD_FILTER,
  REMOVE_FILTER,
  RESET_FILTERS
} from './constants';

import { ReducerFunctionType, State } from '../../types/index';

const initialState: State<String[]> = [];

export const searchFilters: ReducerFunctionType<typeof initialState, String> = (state = initialState, action) => {
  switch(action.type) {
    case ADD_FILTER: return [...state, action.payload];
    case REMOVE_FILTER: return state.filter(filter => filter !== action.payload);
    case RESET_FILTERS: return [];
    default: return state;
  };
};