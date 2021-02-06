import { EDIT_CASK_ORDER } from './constants';

import { Cask, ActionFunctionType } from '../../types/index';

export const editCaskOrder: ActionFunctionType<Cask> = payload => ({
  type: EDIT_CASK_ORDER,
  payload
})