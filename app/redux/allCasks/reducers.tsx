import { SET_CASKS } from './constants';

import {
  Casks,
  ReducerFunctionType,
  State
} from '../../types/index';

const initialState: State<Casks> = [];

export const allCasks: ReducerFunctionType<typeof initialState, Casks> = (state = initialState, action) => {
  switch (action.type) {
    case SET_CASKS: return action.payload
    default: return state;
  };
};