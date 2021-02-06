import { SET_ACTIVE_CASK, RESET_ACTIVE_CASK } from './constants';

import {
  Cask,
  ReducerFunctionType,
  State
} from '../../types/index';

const initialState: State<Cask> = {};

export const activeCask: ReducerFunctionType<typeof initialState, Cask> = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_CASK: return action.payload;
    case RESET_ACTIVE_CASK: return {};
    default: return state;
  }
};
