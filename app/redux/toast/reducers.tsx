import toastActionTypes from "./constants";

import {
  Toast,
  ReducerFunctionType,
  StateType
} from '../../types/index';

const initialState: StateType<Toast[]> = [];

const toasts: ReducerFunctionType<typeof initialState, Toast[], Toast> = (state = initialState, action) => {
  switch (action.type) {
    case toastActionTypes.ADD_TOAST:
      const lastIndex = state[state.length - 1];
      return [
        ...state,
        {
          id: !!lastIndex ? lastIndex.id + 1 : 1,
          ...action.payload
        }
      ];

    case toastActionTypes.REMOVE_TOAST:
      return state.filter(toast => toast.id !== action.payload.id);

    case toastActionTypes.RESET_TOASTS:
      return initialState;

    default:
      return state;
  };
};

export default toasts;
