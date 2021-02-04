import { SET_USER, RESET_USER } from './constants';

import {
  User,
  ReducerFunctionType,
  State
} from '../../types/index';

const initialState: State<User> = {};

export const user: ReducerFunctionType<typeof initialState, User> = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER:
      return action.payload;

    case RESET_USER:
      return {};

    default:
      return state;
  }
};
