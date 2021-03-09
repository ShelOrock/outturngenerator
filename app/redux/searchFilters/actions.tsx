import {
  ADD_FILTER,
  REMOVE_FILTER,
  RESET_FILTERS
} from './constants';

import { ActionFunctionType } from '../../types/index';

export const addFilter: ActionFunctionType<string> = payload => ({
  type: ADD_FILTER,
  payload
});

export const removeFilter: ActionFunctionType<string> = payload => ({
  type: REMOVE_FILTER,
  payload
});

export const resetFilters: ActionFunctionType = payload => ({
  type: RESET_FILTERS,
});