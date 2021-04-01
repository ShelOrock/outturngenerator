import { SET_ACTIVE_OUTTURN, RESET_ACTIVE_OUTTURN } from './constants';

import { Outturn, ActionFunctionType } from '../../types/index';

export const setActiveOutturn: ActionFunctionType<Outturn> = payload => ({
  type: SET_ACTIVE_OUTTURN,
  payload
});

export const resetActiveOutturn: ActionFunctionType = () => ({
  type: RESET_ACTIVE_OUTTURN
})
