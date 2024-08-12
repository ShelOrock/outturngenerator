import searchActionTypes from './constants';

import { Search, ActionFunctionType } from '../../types';

const setSearch: ActionFunctionType<Search> = payload => ({
  type: searchActionTypes.SET_SEARCH,
  payload
})

const resetSearch: ActionFunctionType<Search> = () => ({ type: searchActionTypes.RESET_SEARCH });

export {
  setSearch,
  resetSearch
};
