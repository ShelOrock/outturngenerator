import { SET_SEARCH, RESET_SEARCH } from './constants';

import { Search, ActionFunctionType } from '../../types';

export const setSearch: ActionFunctionType<Search> = search => ({
  type: SET_SEARCH,
  payload: search
})

export const resetSearch: ActionFunctionType<Search> = () => ({ type: RESET_SEARCH });