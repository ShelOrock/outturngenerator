import { SET_ALL_USERS } from './constants';

import { ActionFunctionType, Users } from '../../types'

export const setAllUsers: ActionFunctionType<Users> = users => ({
  type: SET_ALL_USERS,
  payload: users
});