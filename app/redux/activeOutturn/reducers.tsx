import { SET_ACTIVE_OUTTURN, RESET_ACTIVE_OUTTURN } from './constants';

import {
  Outturn,
  ReducerFunctionType,
  State
} from '../../types/index';

const initialState: State<Outturn> = {};

export const activeOutturn: ReducerFunctionType<typeof initialState, Outturn> = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_OUTTURN: return action.payload;
    case RESET_ACTIVE_OUTTURN: return {};
    default: return state;
  }
};
