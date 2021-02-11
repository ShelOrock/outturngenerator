import { SET_CASKS } from './constants';

import { Casks, ActionFunctionType } from '../../types/index';

export const setCasks: ActionFunctionType<Casks> = payload => ({
  type: SET_CASKS,
  payload
});