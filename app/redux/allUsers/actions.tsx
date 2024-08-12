import usersActionTypes from './constants';

import { ActionFunctionType, Users } from '../../types'

const setUsers: ActionFunctionType<Users> = payload => ({
  type: usersActionTypes.SET_USERS,
  payload
});

const resetUsers: ActionFunctionType = () => ({ type: usersActionTypes.RESET_USERS });

export {
  setUsers,
  resetUsers
};
