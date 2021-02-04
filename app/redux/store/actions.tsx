import { RESET_STORE } from './constants';

import { ActionFunctionType } from '../../types/index';

export const resetStore: ActionFunctionType = () => ({ type: RESET_STORE });
