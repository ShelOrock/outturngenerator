import { SET_MODAL, RESET_MODAL } from './constants';

import { Modal, ActionFunctionType } from '../../types/index';

export const setModal: ActionFunctionType<Modal> = modal => ({
  type: SET_MODAL,
  payload: modal
});

export const resetModal: ActionFunctionType<Modal> = () => ({ type: RESET_MODAL });
