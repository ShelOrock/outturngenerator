import {
  ADD_NEW_CASK,
  EDIT_CASK,
  DELETE_CASK
} from './constants';

import { Cask, ActionFunctionType } from '../../types/index';

export const addNewCask: ActionFunctionType<Cask> = payload => ({
  type: ADD_NEW_CASK,
  payload
});

export const editCask: ActionFunctionType<Cask> = payload => ({
  type: EDIT_CASK,
  payload
});

export const deleteCask: ActionFunctionType<Cask> = () => ({ type: DELETE_CASK });
