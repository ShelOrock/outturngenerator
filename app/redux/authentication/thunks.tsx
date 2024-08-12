import axios from 'axios';

import apiEndpoints from "../../api";

import { activeUserActions, loadingActions } from '../actions';

import { ThunkFunctionType } from '../../types/index';

const attemptUserLogin: ThunkFunctionType = credentials => (
  async dispatch => {
    try {
      dispatch(loadingActions.setLoading(true));
      const response = await axios.post(`${ apiEndpoints.BASE_URL }/${ apiEndpoints.AUTHENTICATION_ENDPOINTS }/login`, credentials)
      dispatch(activeUserActions.setActiveUser(response.data));

    } catch(e) {
      dispatch(activeUserActions.resetActiveUser());
      console.error(e);

    } finally {
      dispatch(loadingActions.setLoading(false));
    };
  }
);

const attemptUserLogout: ThunkFunctionType = userId => (
  async dispatch => {
    try {
      dispatch(loadingActions.setLoading(true));
      await axios.post(`${ apiEndpoints.BASE_URL }/${ apiEndpoints.AUTHENTICATION_ENDPOINTS }/logout`, userId)
      dispatch(activeUserActions.resetActiveUser());

    } catch(e) {
      console.error(e);

    } finally {
      dispatch(loadingActions.setLoading(false))
    };
  }
);

const attemptUserSignUp: ThunkFunctionType = credentials => (
  async dispatch => {
    try {
      dispatch(loadingActions.setLoading(true));
      const response = await axios.post(`${ apiEndpoints.BASE_URL }/${ apiEndpoints.AUTHENTICATION_ENDPOINTS }/signup`, credentials)
      dispatch(activeUserActions.setActiveUser(response.data));

    } catch(e) {
      console.error(e);

    } finally {
      dispatch(loadingActions.setLoading(false))
    };
  }
);

export { 
  attemptUserLogin,
  attemptUserLogout,
  attemptUserSignUp
};
