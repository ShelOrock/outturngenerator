import {
  ADD_TOAST,
  REMOVE_TOAST,
  RESET_TOAST
} from './constants';

import {
  Toast,
  ReducerFunctionType,
  State
} from '../../types/index';

const initialState: State<Toast[]> = [];

export const toast: ReducerFunctionType<typeof initialState, Toast> = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOAST:
      return [ ...state, action.payload ];

    case REMOVE_TOAST:
      return state.filter(_toast => _toast !== action.payload);

    case RESET_TOAST:
      return [];

    default:
      return state;
  }
};
