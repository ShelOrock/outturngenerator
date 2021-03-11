import {
  SET_FILTERS,
  REMOVE_FILTER,
  RESET_FILTERS
} from './constants';

import { ActionFunctionType } from '../../types/index';

export const setFilters: ActionFunctionType<string[]> = payload => ({
  type: SET_FILTERS,
  payload
});

export const removeFilter: ActionFunctionType<string> = payload => ({
  type: REMOVE_FILTER,
  payload
})

export const resetFilters: ActionFunctionType = () => ({
  type: RESET_FILTERS,
});