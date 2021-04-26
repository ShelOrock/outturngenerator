import axios from 'axios';

import * as actions from '../actions'
const {
  usersActions: { setAllUsers },
  modalActions: { resetModal },
  loadingActions: { setLoading },
} = actions;

import { ThunkFunctionType } from '../../types'

const API_URL = '/api/user';

export const getAllUsers: ThunkFunctionType = (sort, filters = []) => {
  console.log(sort, filters)
  return dispatch => {
    dispatch(setLoading(true))
    axios
      .post(`${ API_URL }/get-users/?sort_by=${ sort }`, { filters })
      .then(res => dispatch(setAllUsers(res.data)))
      .catch(e => console.log(e))
      .finally(() => dispatch(setLoading(false)))
  };
};

export const editUser: ThunkFunctionType = (userId, userType, sort, filters) => {
  return dispatch => {
    dispatch(setLoading(true))
    axios
      .post(`${ API_URL }/edit/${ userId }`, userType)
      .then(() => dispatch(getAllUsers(sort, filters)))
      .catch(e => console.log(e))
      .finally(() => dispatch(setLoading(false)))
  };
};

export const deleteUser: ThunkFunctionType = (userId, sort, filters) => {
  return dispatch => {
    dispatch(setLoading(true))
    axios
      .delete(`${ API_URL }/${ userId }`)
      .then(() => {
        dispatch(resetModal())
        dispatch(getAllUsers(sort, filters))
      })
      .catch(e => console.log(e))
      .finally(() => dispatch(setLoading(false)))
  };
};