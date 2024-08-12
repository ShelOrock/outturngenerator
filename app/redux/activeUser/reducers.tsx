import activeUserActionTypes from './constants';

import {
  User,
  ReducerFunctionType,
  StateType
} from '../../types/index';

const initialState: StateType<User> = {} as User;

const activeUser: ReducerFunctionType<typeof initialState, User, User> = (state = initialState, action) => {
  switch (action.type) {
    case activeUserActionTypes.SET_ACTIVE_USER:
      return action.payload;

    case activeUserActionTypes.RESET_ACTIVE_USER: 
      return initialState;

    default:
      return state;
  }
};

export default activeUser;
