import { SET_MODAL, RESET_MODAL } from './constants';

import { ModalTypes, ActionFunctionType } from '../../types';

export const setModal: ActionFunctionType<ModalTypes> = payload => ({
  type: SET_MODAL,
  payload
});

export const resetModal: ActionFunctionType<ModalTypes> = () => ({ type: RESET_MODAL });
