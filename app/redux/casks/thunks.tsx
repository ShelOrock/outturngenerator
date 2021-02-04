import axios from 'axios';

import * as actions from '../actions';
const { 
  activeCaskActions: { setActiveCask },
  markCaskActions: { unmarkCask, resetMarkedCasks },
  modalActions: { resetModal },
  toastActions: { addToast },
  loadingActions: { setLoading }
} = actions

import * as thunks from '../thunks';
const {
  activeOutturnThunks: { getActiveOutturn },
  activeCaskThunks: { getActiveCask }
} = thunks;

import { ThunkFunctionType } from '../../types/index';

const API_URL = '/api/cask/'

export const addNewCask: ThunkFunctionType = (outturnId, cask) => {
  return dispatch => {
    dispatch(setLoading(true));
    axios
      .post(`${ API_URL }`, { outturnId: outturnId, ...cask })
      .then(res => {
        dispatch(addToast({
          id: 0,
          status: 'SUCCESS',
          message: res.data.message
        }))
        dispatch(resetModal())
        dispatch(getActiveCask(res.data.createdCask.id))
        dispatch(getActiveOutturn(outturnId));
      })
      .catch(e => console.error(e))
      .finally(() => dispatch(setLoading(false)));
  };
};

export const deleteCask: ThunkFunctionType = (activeCaskId, caskId, outturnId) => {
  return dispatch => {
    dispatch(setLoading(true))
    axios
      .delete(`${ API_URL }${ caskId }`)
      .then(() => {
        if (activeCaskId === caskId) dispatch(setActiveCask({}));
        dispatch(unmarkCask(caskId))
        dispatch(resetModal());
        dispatch(getActiveOutturn(outturnId));
      })
      .catch(e => console.error(e))
      .finally(() => dispatch(setLoading(false)));
  };
};

export const deleteManyCasks: ThunkFunctionType = (markedCasks, activeCaskId, outturnId) => {
  return dispatch => {
    dispatch(setLoading(true));
    axios
      .post(`${ API_URL }delete-many`, { markedCasks })
      .then(res => {
        dispatch(addToast({
          id: 0,
          status: 'SUCCESS',
          message: res.data.message
        }))
        if (markedCasks.includes(activeCaskId)) dispatch(setActiveCask({}));
        dispatch(resetMarkedCasks());
        dispatch(resetModal());
        dispatch(getActiveOutturn(outturnId));
      })
      .catch(e => console.error(e))
      .finally(() => dispatch(setLoading(false)));
  }
};

export const editCask: ThunkFunctionType = (caskId, cask) => {
  return dispatch => {
    dispatch(setLoading(true));
    axios
      .put(`${ API_URL }${ caskId }`, { ...cask })
      .then(() => dispatch(getActiveCask(caskId)))
      .catch(e => console.error(e))
      .finally(() => dispatch(setLoading(false)));
  };
};
