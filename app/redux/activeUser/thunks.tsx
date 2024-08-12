import axios from 'axios';

import apiEndpoints from "../../api";

import {
  activeUserActions,
  toastActions,
  loadingActions
} from '../actions';

import { ThunkFunctionType } from '../../types/index';

export const getActiveUser: ThunkFunctionType = userId => (
  async dispatch => {
    try {
      dispatch(loadingActions.setLoading(true))
      const response = await axios.get(`${ apiEndpoints.BASE_URL }/${ apiEndpoints.USERS_ENDPOINT }/${ userId }`);
      dispatch(activeUserActions.setActiveUser(response.data));

    } catch(e) {
      console.error(e);
      dispatch(toastActions.addToast({
        id: 0,
        status: "FAIL",
        message: e
      }));

    } finally {
      dispatch(loadingActions.setLoading(false))
    };
  }
);