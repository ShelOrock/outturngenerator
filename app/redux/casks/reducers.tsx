import { EDIT_CASK_ORDER } from './constants';

import {
  Cask,
  ReducerFunctionType,
  State
} from '../../types/index';

const initialState: State<Cask> = {};

export const casks: ReducerFunctionType<typeof initialState, Cask> = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_CASK_ORDER: return action.payload;
    default: return state;
  }
}