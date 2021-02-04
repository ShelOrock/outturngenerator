import { SET_OUTTURNS } from './constants';

import {
  Outturns,
  ReducerFunctionType,
  State
} from '../../types/index';

const initialState: State<Outturns> = [];

export const allOutturns: ReducerFunctionType<typeof initialState, Outturns> = (state = initialState, action) => {
  switch (action.type) {
    case SET_OUTTURNS:
      return action.payload;

    default:
      return state;
  }
};
