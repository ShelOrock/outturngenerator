import dialogActionTypes from './constants';

import { DialogTypes, ActionFunctionType } from '../../types';

export const setDialog: ActionFunctionType<DialogTypes> = payload => ({
  type: dialogActionTypes.SET_DIALOG,
  payload
});

export const resetDialog: ActionFunctionType<DialogTypes> = () => ({ type: dialogActionTypes.RESET_DIALOG });
