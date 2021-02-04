import axios from 'axios';

import * as actions from '../actions';
const {
  activeOutturnActions: { setActiveOutturn },
  loadingActions: { setLoading },
} = actions;

import { ThunkFunctionType } from '../../types/index';

const API_URL = '/api/outturn/'

export const getActiveOutturn: ThunkFunctionType = outturnId => {
  return dispatch => {
    dispatch(setLoading(true));
    axios
      .get(`${ API_URL }${ outturnId }`)
      .then(res => dispatch(setActiveOutturn(res.data)))
      .catch(e => console.error(e))
      .finally(() => dispatch(setLoading(false)))
  };
};
