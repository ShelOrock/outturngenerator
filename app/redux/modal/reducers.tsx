import { SET_MODAL, RESET_MODAL } from './constants';

import {
  ModalTypes,
  ReducerFunctionType,
  State
} from '../../types';

const initialState: State<ModalTypes> = {
  open: false,
  heading: '',
  state: {
    heading: '',
    subheading: '',
    description: '',
  },
  primaryAction: {
    text: '',
    onClick: null
  },
  secondaryAction: {
    text: '',
    onClick: null
  }
};

export const modal: ReducerFunctionType<typeof initialState, ModalTypes> = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL:
      return action.payload;

    case RESET_MODAL:
      return initialState;

    default:
      return state;
  };
};
