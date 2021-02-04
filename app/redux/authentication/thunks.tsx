import axios from 'axios';

import * as actions from '../actions';
const {
  userActions: { setUser, resetUser },
  loadingActions: { setLoading }
} = actions;

import { ThunkFunctionType } from '../../types/index';

const API_URL = '/api/authentication/'

export const attemptUserLogin: ThunkFunctionType = credentials => {
  return dispatch => {
    setLoading(true);
    axios
      .post(`${ API_URL }login`, credentials)
      .then(res => dispatch(setUser(res.data)))
      .catch(e => {
        dispatch(resetUser());
        console.error(e);
      })
      .finally(() => dispatch(setLoading(false)))
  };
};

export const attemptUserLogout: ThunkFunctionType = userId => {
  return dispatch => {
    setLoading(true);
    axios
      .post(`${ API_URL }logout`, { userId })
      .then(() => dispatch(resetUser()))
      .catch(e => console.error(e))
      .finally(() => dispatch(setLoading(false)));
  };
};
