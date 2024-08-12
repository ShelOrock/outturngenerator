import activeUserActionTypes from './constants';

import { User, ActionFunctionType } from '../../types/index';

const setActiveUser: ActionFunctionType<User> = payload => ({
  type: activeUserActionTypes.SET_ACTIVE_USER,
  payload
});

const resetActiveUser: ActionFunctionType<User> = () => ({ type: activeUserActionTypes.RESET_ACTIVE_USER })

export {
  setActiveUser,
  resetActiveUser 
};
