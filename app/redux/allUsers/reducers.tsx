import { SET_ALL_USERS } from './constants';

import { 
  ReducerFunctionType,
  State,
  Users,
} from '../../types';

const initialState: State<Users> = [];

export const allUsers: ReducerFunctionType<typeof initialState, Users> = (state = initialState, action) => {
  switch(action.type) {
    case SET_ALL_USERS: return action.payload;
    default: return state;
  };
};