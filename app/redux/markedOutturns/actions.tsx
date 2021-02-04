import {
  MARK_OUTTURN,
  UNMARK_OUTTURN,
  RESET_MARKED_OUTTURNS
} from './constants';

import { ActionFunctionType } from '../../types/index';

export const markOutturn: ActionFunctionType<String> = outturnId => ({
  type: MARK_OUTTURN,
  payload: outturnId
});

export const unmarkOutturn: ActionFunctionType<String> = outturnId => ({
  type: UNMARK_OUTTURN,
  outturnId
});

export const resetMarkedOutturns: ActionFunctionType = () => ({ type: RESET_MARKED_OUTTURNS });
