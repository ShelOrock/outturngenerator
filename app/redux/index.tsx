import { combineReducers } from 'redux';

import activeUser from './activeUser/reducers';
import users from './allUsers/reducers';
import filters from './filters/reducers';
import search from './search/reducers';
import dialog from './dialog/reducers';
import toasts from './toast/reducers';
import loading from './loading/reducers';
import appData from "./entities/reducers";

export default combineReducers({
  appData,
  activeUser,
  users,
  filters,
  search,
  dialog,
  toasts,
  loading,
});