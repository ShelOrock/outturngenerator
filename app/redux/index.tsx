import { combineReducers } from 'redux';

import { allOutturns } from './outturns/reducers';
import { activeOutturn } from './activeOutturn/reducers';
import { allCasks } from './allCasks/reducers';
import { activeCask } from './activeCask/reducers';
import { user } from './user/reducers';
import { markedCasks } from './markedCasks/reducers';
import { markedOutturns } from './markedOutturns/reducers';
import { searchFilters } from './searchFilters/reducers';
import { modal } from './modal/reducers';
import { toast } from './toast/reducers';
import { isLoading } from './loading/reducers';

export default combineReducers({
  allOutturns,
  activeOutturn,
  allCasks,
  activeCask,
  user,
  markedCasks,
  markedOutturns,
  searchFilters,
  modal,
  toast,
  isLoading,
});