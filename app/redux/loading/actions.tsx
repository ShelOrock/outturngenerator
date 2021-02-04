import { SET_LOADING } from './constants';

import { ActionFunctionType } from '../../types/index';

export const setLoading: ActionFunctionType<Boolean> = boolean => ({
  type: SET_LOADING,
  payload: boolean
});
