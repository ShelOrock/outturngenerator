import axios from 'axios';

import * as actions from '../actions';
const {
  activeUserActions: { setActiveUser, resetActiveUser },
  loadingActions: { setLoading }
} = actions;

import { ThunkFunctionType } from '../../types/index';

const API_URL = '/api/authentication'

export const attemptUserLogin: ThunkFunctionType = credentials => {
  return dispatch => {
    setLoading(true);
    axios
      .post(`${ API_URL }/login`, credentials)
      .then(res => dispatch(setActiveUser(res.data)))
      .catch(e => {
        dispatch(resetActiveUser());
        console.error(e);
      })
      .finally(() => dispatch(setLoading(false)))
  };
};

export const attemptUserSignUp: ThunkFunctionType = credentials => {
  console.log(credentials)
  return dispatch => {
    setLoading(true);
    axios
      .post(`${ API_URL }/signup`, credentials)
      .then(res => dispatch(setActiveUser(res.data)))
      .catch(e => console.log(e))
      .finally(() => dispatch(setLoading(false)))
  }
}

export const attemptUserLogout: ThunkFunctionType = userId => {
  return dispatch => {
    setLoading(true);
    axios
      .post(`${ API_URL }/logout`, { userId })
      .then(() => dispatch(resetActiveUser()))
      .catch(e => console.error(e))
      .finally(() => dispatch(setLoading(false)));
  };
};
