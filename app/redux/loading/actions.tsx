import loadingActionTypes from './constants';

import { ActionFunctionType } from '../../types/index';

const setLoading: ActionFunctionType<Boolean> = payload => ({
  type: loadingActionTypes.SET_LOADING,
  payload
});

const resetLoading: ActionFunctionType = () => ({ type: loadingActionTypes.RESET_LOADING });

export {
  setLoading,
  resetLoading
};
