import {
  MARK_CASK,
  MARK_ALL_CASKS,
  UNMARK_CASK,
  UNMARK_ALL_CASKS,
  RESET_MARKED_CASKS,
} from './constants';

import { ActionFunctionType } from '../../types/index';

export const markCask: ActionFunctionType<string> = caskId => ({
  type: MARK_CASK,
  payload: caskId
});

export const markAllCasks: ActionFunctionType<string[]> = caskIds => ({
  type: MARK_ALL_CASKS,
  payload: caskIds
});

export const unmarkCask: ActionFunctionType<string> = caskId => ({
  type: UNMARK_CASK,
  payload: caskId
});

export const unmarkAllCasks: ActionFunctionType = () => ({ type: UNMARK_ALL_CASKS });

export const resetMarkedCasks: ActionFunctionType = () => ({ type: RESET_MARKED_CASKS });

