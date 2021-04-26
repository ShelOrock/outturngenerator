import { SET_ACTIVE_USER, RESET_ACTIVE_USER } from './constants';

import {
  User,
  ReducerFunctionType,
  State
} from '../../types/index';

const initialState: State<User> = {} as User;

export const activeUser: ReducerFunctionType<typeof initialState, User> = (state = initialState, action) => {

  switch (action.type) {
    case SET_ACTIVE_USER:
      return action.payload;
    case RESET_ACTIVE_USER: 
      return {} as User;
    default:
      return state;
  }
};
