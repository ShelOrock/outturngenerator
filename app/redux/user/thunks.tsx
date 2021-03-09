import axios from 'axios';

import * as actions from '../actions';
const {
  userActions: { setUser },
  toastActions: { addToast },
  loadingActions: { setLoading }
} = actions;

import { ThunkFunctionType } from '../../types/index';

const API_URL = '/api/user'

export const getUser: ThunkFunctionType = userId => {
  return dispatch => {
    dispatch(setLoading(true))
    return axios
      .get(`${ API_URL }/${ userId }`)
      .then(res => dispatch(setUser(res.data)))
      .catch(e => dispatch(addToast({
        id: 0,
        status: 'FAIL',
        message: e
      })))
      .finally(() => dispatch(setLoading(false)));
  };
};