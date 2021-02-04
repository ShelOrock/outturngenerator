import {
  ADD_TOAST,
  REMOVE_TOAST,
  RESET_TOAST
} from './constants';

import { Toast, ActionFunctionType } from '../../types/index';

export const addToast: ActionFunctionType<Toast> = toast => ({
  type: ADD_TOAST,
  payload: toast
});


export const removeToast: ActionFunctionType<Toast> = toast => ({
  type: REMOVE_TOAST,
  payload: toast
});

export const resetToast: ActionFunctionType<Toast> = () => ({ type: RESET_TOAST });
