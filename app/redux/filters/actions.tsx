import filtersActionTypes from "./constants";

import { ActionFunctionType } from '../../types/index';

const setFilters: ActionFunctionType<string[]> = payload => ({
  type: filtersActionTypes.SET_FILTERS,
  payload
});

const resetFilters: ActionFunctionType = () => ({ type: filtersActionTypes.RESET_FILTERS });

const addFilter: ActionFunctionType<string> = payload => ({
  type: filtersActionTypes.ADD_FILTER,
  payload
});

const deleteFilter: ActionFunctionType<string> = payload => ({
  type: filtersActionTypes.DELETE_FILTER,
  payload
});

export {
  setFilters,
  resetFilters,
  addFilter,
  deleteFilter,
};
