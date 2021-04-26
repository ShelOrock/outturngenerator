import { SET_ACTIVE_USER, RESET_ACTIVE_USER } from './constants';

import { User, ActionFunctionType } from '../../types/index';

export const setActiveUser: ActionFunctionType<User> = user => ({
  type: SET_ACTIVE_USER,
  payload: user
})


export const resetActiveUser: ActionFunctionType<User> = () => ({ type: RESET_ACTIVE_USER })
