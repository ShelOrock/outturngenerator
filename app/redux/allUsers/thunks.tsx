import axios from 'axios';

import apiEndpoints from "../../api";

import {
  usersActions,
  dialogActions,
  loadingActions
} from '../actions'

import { ThunkFunctionType } from '../../types'

const getUsers: ThunkFunctionType = (sort, filters = []) => (
  async dispatch => {
    try {
      dispatch(loadingActions.setLoading(true));
      const response = await axios.post(`${ apiEndpoints.BASE_URL }/${ apiEndpoints.USERS_ENDPOINT }/get-users/?sort_by=${ sort }`, { filters });
      dispatch(usersActions.setUsers(response.data));

    } catch(e) {
      console.error(e);

    } finally {
      dispatch(loadingActions.setLoading(false));
    };
  }
);

const editUser: ThunkFunctionType = (
  userId,
  payload,
  sort,
  filters
) => (
  async dispatch => {
    try {
      dispatch(loadingActions.setLoading(true))
      await axios.put(`${ apiEndpoints.BASE_URL }/${ apiEndpoints.USERS_ENDPOINT }/${ userId }`, payload);
      dispatch(getUsers(sort, filters));

    } catch(e) {
      console.error(e);

    } finally {
      dispatch(loadingActions.setLoading(false))
    };
  }
);

const deleteUser: ThunkFunctionType = (
  userId,
  sort,
  filters
) => (
  async dispatch => {
    try {
      dispatch(loadingActions.setLoading(true))
      await axios.delete(`${ apiEndpoints.BASE_URL }/${ apiEndpoints.USERS_ENDPOINT }/${ userId }`)
      dispatch(dialogActions.resetDialog());
      dispatch(getUsers(sort, filters));

    } catch(e) {
      console.log(e);

    } finally { 
      dispatch(loadingActions.setLoading(false))
    };
  }
);

export {
  getUsers,
  editUser,
  deleteUser
};
