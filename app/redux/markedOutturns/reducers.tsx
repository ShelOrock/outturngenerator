import {
  MARK_OUTTURN,
  UNMARK_OUTTURN,
  RESET_MARKED_OUTTURNS
} from './constants';

import { ReducerFunctionType, State } from '../../types/index';

const initialState: State<String[]> = [];

export const markedOutturns: ReducerFunctionType<typeof initialState, String> = (state = initialState, action) => {
  switch (action.type) {
    case MARK_OUTTURN: return [ ...state, action.payload ];
    case UNMARK_OUTTURN: return state.filter(outturn => outturn !== action.payload);
    case RESET_MARKED_OUTTURNS: return [];
    default: return state;
  }
};
