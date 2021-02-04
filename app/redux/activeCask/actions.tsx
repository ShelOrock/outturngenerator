import { RESET_ACTIVE_CASK, SET_ACTIVE_CASK } from './constants';

import { Cask, ActionFunctionType } from '../../types/index';

export const setActiveCask: ActionFunctionType<Cask> = payload => ({
  type: SET_ACTIVE_CASK,
  payload
});

export const resetActiveCask: ActionFunctionType = () => ({ type: RESET_ACTIVE_CASK });
