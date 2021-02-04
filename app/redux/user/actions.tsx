import { SET_USER, RESET_USER } from './constants';

import { User, ActionFunctionType } from '../../types/index';

export const setUser: ActionFunctionType<User> = user => ({
  type: SET_USER,
  payload: user
})


export const resetUser: ActionFunctionType<User> = () => ({ type: RESET_USER })
