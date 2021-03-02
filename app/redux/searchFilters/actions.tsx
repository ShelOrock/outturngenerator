import {
  ADD_FILTER,
  REMOVE_FILTER,
  RESET_FILTERS
} from './constants';

import { ActionFunctionType } from '../../types/index';

export const addFilter: ActionFunctionType<String> = payload => ({
  type: ADD_FILTER,
  payload
});

export const removeFilter: ActionFunctionType<String> = payload => ({
  type: REMOVE_FILTER,
  payload
});

export const resetFilters: ActionFunctionType = payload => ({
  type: RESET_FILTERS,
});