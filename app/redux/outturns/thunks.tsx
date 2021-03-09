import axios from 'axios';

import * as actions from '../actions';
const {
  outturnsActions: { setOutturns },
  activeOutturnActions: { setActiveOutturn },
  markOutturnActions: { unmarkOutturn, resetMarkedOutturns },
  modalActions: { resetModal },
  loadingActions: { setLoading }
} = actions;

import { ThunkFunctionType } from '../../types/index';

const API_URL = '/api/outturn';

export const getOutturns: ThunkFunctionType = sortBy => {
  return dispatch => {
    dispatch(setLoading(true));
    axios
      .get(`${ API_URL }/?sort_by=${ sortBy }`)
      .then(res => dispatch(setOutturns(res.data)))
      .catch(e => console.error(e))
      .finally(() => dispatch(setLoading(false)));
  };
};

export const addOutturn: ThunkFunctionType = (outturnName, sortBy) => {
  console.log(outturnName)
  return dispatch => {
    dispatch(setLoading(true));
    axios
      .post(`${ API_URL }`, outturnName)
      .then(() => {
        dispatch(resetModal());
        dispatch(getOutturns(sortBy));
      })
      .catch(e => console.error(e))
      .finally(() => dispatch(setLoading(false)))
  };
};

export const deleteOutturn: ThunkFunctionType = (outturnId, activeOutturnId, sortBy) => {
  console.log(outturnId)
  return dispatch => {
    dispatch(setLoading(true));
    axios
      .delete(`${ API_URL }/${ outturnId }`)
      .then(() => {
        if(activeOutturnId === outturnId) dispatch(setActiveOutturn({}));
        dispatch(unmarkOutturn(outturnId));
        dispatch(resetModal());
        dispatch(getOutturns(sortBy));
      })
      .catch(e => console.error(e))
      .finally(() => dispatch(setLoading(false)))
  };
};

export const deleteManyOutturns: ThunkFunctionType = (markedOutturns, activeOutturnId, sortBy) => {
  return dispatch => {
    dispatch(setLoading(true));
    axios
      .post(`${ API_URL }/delete-many`, { markedOutturns })
      .then(() => {
        if(markedOutturns.includes(activeOutturnId)) dispatch(setActiveOutturn({}));
        dispatch(resetMarkedOutturns());
        dispatch(resetModal());
        dispatch(getOutturns(sortBy));
      })
      .catch(e => console.error(e))
      .finally(() => dispatch(setLoading(false)))
  };
};
