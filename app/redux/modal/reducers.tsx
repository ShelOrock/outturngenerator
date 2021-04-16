import { SET_MODAL, RESET_MODAL } from './constants';

import {
  Modal,
  ReducerFunctionType,
  State
} from '../../types/index';

const initialState: State<Modal> = {} as Modal;

export const modal: ReducerFunctionType<typeof initialState, Modal> = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL: return action.payload;
    case RESET_MODAL: return {} as Modal;
    default: return state;
  }
};
