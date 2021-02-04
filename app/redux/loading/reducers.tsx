import { SET_LOADING } from './constants';

import { ReducerFunctionType, State} from '../../types/index';

const initialState: State<Boolean> = false

export const isLoading: ReducerFunctionType<typeof initialState, Boolean> = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: return action.payload;
    default: return state;
  }
};
