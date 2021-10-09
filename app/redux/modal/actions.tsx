import { SET_MODAL, RESET_MODAL } from './constants';

import { ModalTypes, ActionFunctionType } from '../../types';

export const setModal: ActionFunctionType<ModalTypes> = modal => ({
  type: SET_MODAL,
  payload: modal
});

export const resetModal: ActionFunctionType<ModalTypes> = () => ({ type: RESET_MODAL });
