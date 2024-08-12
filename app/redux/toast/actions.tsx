import toastActionTypes from "./constants";

import { Toast, ActionFunctionType } from '../../types/index';

const addToast: ActionFunctionType<Toast> = payload => ({
  type: toastActionTypes.ADD_TOAST,
  payload
});


const removeToast: ActionFunctionType<Toast> = payload => ({
  type: toastActionTypes.REMOVE_TOAST,
  payload
});

const resetToasts: ActionFunctionType<Toast> = () => ({ type: toastActionTypes.RESET_TOASTS });

export {
  addToast,
  removeToast,
  resetToasts
};
