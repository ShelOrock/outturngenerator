import usersActionTypes from './constants';

import { 
  ReducerFunctionType,
  StateType,
  Users,
  User
} from '../../types';

const initialState: StateType<Users> = [];

const users: ReducerFunctionType<typeof initialState, Users, User[]> = (state = initialState, action) => {
  switch(action.type) {
    case usersActionTypes.SET_USERS:
      return action.payload;

    case usersActionTypes.RESET_USERS:
      return initialState;

    default:
      return state;
  };
};

export default users;
