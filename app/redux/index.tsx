import { combineReducers } from 'redux';

import { activeOutturn } from './activeOutturn/reducers';
import { allOutturns } from './outturns/reducers';
import { activeCask } from './activeCask/reducers';
import { user } from './user/reducers';
import { markedCasks } from './markedCasks/reducers';
import { markedOutturns } from './markedOutturns/reducers';
import { modal } from './modal/reducers';
import { toast } from './toast/reducers';
import { isLoading } from './loading/reducers';

export default combineReducers({
  activeOutturn,
  allOutturns,
  activeCask,
  user,
  markedCasks,
  markedOutturns,
  modal,
  toast,
  isLoading,
});