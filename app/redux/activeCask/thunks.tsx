import axios from 'axios';

import * as actions from '../actions';
const {
  activeCaskActions: { setActiveCask },
  loadingActions: { setLoading }
} = actions;

import { ThunkFunctionType } from '../../types/index';

const API_URL = '/api/cask/';

export const getActiveCask: ThunkFunctionType = caskId => {
  return dispatch => {
    dispatch(setLoading(true));
    axios
      .get(`${ API_URL }${ caskId }`)
      .then(res => dispatch(setActiveCask(res.data)))
      .catch(e => console.error(e))
      .finally(() => dispatch(setLoading(false)));
  };
};
