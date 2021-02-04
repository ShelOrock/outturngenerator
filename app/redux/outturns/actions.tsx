import { SET_OUTTURNS } from './constants';

import { Outturns, ActionFunctionType } from '../../types/index';

export const setOutturns: ActionFunctionType<Outturns> = outturns => ({
  type: SET_OUTTURNS,
  payload: outturns
});
