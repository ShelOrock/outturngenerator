import axios from 'axios';

import { setCasks } from './actions';
import { setActiveCask, resetActiveCask } from '../activeCask/actions';
import { unmarkCask, resetMarkedCasks } from '../markedCasks/actions';
import { resetModal } from '../modal/actions';
import { addToast } from '../toast/actions';
import { setLoading } from '../loading/actions';

import { getActiveOutturn } from '../activeOutturn/thunks'
import { getActiveCask } from '../activeCask/thunks'

import { ThunkFunctionType } from '../../types';

const API_URL = '/api/cask'

export const getCasks: ThunkFunctionType = (sort, filters = []) => {
  return dispatch => {
    dispatch(setLoading(true));
    axios
      .post(`${ API_URL }/get-casks/?sort_by=${ sort }`, { filters })
      .then(res => dispatch(setCasks(res.data)))
      .catch(e => console.error(e))
      .finally(() => dispatch(setLoading(false)));
  };
};

export const addNewCask: ThunkFunctionType = (outturnId = null, caskList = [], sort, filters, cask) => {
  return dispatch => {
    dispatch(setLoading(true));
    axios
      .post(`${ API_URL }/create-new-cask`, { ...cask, outturnId: outturnId, caskPosition: caskList.length })
      .then(res => {
        if(outturnId) dispatch(getActiveOutturn(outturnId));
        dispatch(addToast({
          id: 0,
          status: 'SUCCESS',
          message: res.data.message
        }))
        dispatch(resetModal());
        dispatch(getCasks(sort, filters));
        dispatch(getActiveCask(res.data.createdCask.id));
      })
      .catch(e => console.error(e))
      .finally(() => dispatch(setLoading(false)));
  };
};

export const editCask: ThunkFunctionType = (caskId, cask) => {
  return dispatch => {
    dispatch(setLoading(true));
    axios
      .put(`${ API_URL }/${ caskId }`, { ...cask })
      .then(() => {
        dispatch(getCasks());
        dispatch(getActiveCask(caskId));
      })
      .catch(e => console.error(e))
      .finally(() => dispatch(setLoading(false)));
  };
};

export const editManyCasks: ThunkFunctionType = (outturnId, casks) => {
  console.log({casks})
  return dispatch => {
    dispatch(setLoading(true));
    axios
      .post(`${ API_URL }/edit-many`, { casks })
      .then(() => dispatch(getActiveOutturn(outturnId)))
      .catch(e => console.error(e))
      .finally(() => dispatch(setLoading(false)));
  };
};

export const deleteCask: ThunkFunctionType = (activeCaskId, caskId, outturnId = null, sort, filter) => {
  return dispatch => {
    dispatch(setLoading(true))
    axios
      .delete(`${ API_URL }/${ caskId }`)
      .then(() => {
        if(activeCaskId === caskId) dispatch(setActiveCask({}));
        if(outturnId) dispatch(getActiveOutturn(outturnId));
        dispatch(unmarkCask(caskId))
        dispatch(resetModal());
        dispatch(getCasks(sort, filter));
      })
      .catch(e => console.error(e))
      .finally(() => dispatch(setLoading(false)));
  };
};

export const deleteManyCasks: ThunkFunctionType = (markedCasks, activeCaskId, outturnId, sort, filters) => {
  return dispatch => {
    dispatch(setLoading(true));
    axios
      .post(`${ API_URL }/delete-many`, { markedCasks })
      .then(res => {
        dispatch(addToast({
          id: 0,
          status: 'SUCCESS',
          message: res.data.message
        }))
        if (markedCasks.includes(activeCaskId)) dispatch(setActiveCask({}));
        dispatch(resetMarkedCasks());
        dispatch(resetModal());
        dispatch(getCasks(sort, filters));
        dispatch(resetActiveCask())
        if (outturnId) dispatch(getActiveOutturn(outturnId));
      })
      .catch(e => console.error(e))
      .finally(() => dispatch(setLoading(false)));
  }
};
