import {
  MARK_CASK,
  MARK_ALL_CASKS,
  UNMARK_CASK,
  UNMARK_ALL_CASKS,
  RESET_MARKED_CASKS
} from './constants';

import { ReducerFunctionType, State } from '../../types/index';

const initialState: State<String[]> = [];

export const markedCasks: ReducerFunctionType<typeof initialState, String> = (state = initialState, action) => {
  switch (action.type) {
    case MARK_CASK: 
      return [ ...state, action.payload ];

    case MARK_ALL_CASKS:
      return [ ...action.payload ];

    case UNMARK_CASK:
      return state.filter(cask => cask !== action.payload);

    case UNMARK_ALL_CASKS:
      return [];

    case RESET_MARKED_CASKS:
      return initialState;

    default:
      return state;
  };
};
