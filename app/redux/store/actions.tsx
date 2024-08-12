import storeActionTypes from './constants';

import { ActionFunctionType } from '../../types/index';

const resetStore: ActionFunctionType = () => ({ type: storeActionTypes.RESET_STORE });

export { resetStore };
