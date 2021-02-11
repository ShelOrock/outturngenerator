import axios from 'axios';

import { setCasks } from './actions';
import { setActiveCask } from '../activeCask/actions';
import { unmarkCask, resetMarkedCasks } from '../markedCasks/actions';
import { resetModal } from '../modal/actions';
import { addToast } from '../toast/actions';
import { setLoading } from '../loading/actions';

import { getActiveOutturn } from '../activeOutturn/thunks'
import { getActiveCask } from '../activeCask/thunks'

import { ThunkFunctionType } from '../../types/index';

const API_URL = '/api/cask/'

export const getCasks: ThunkFunctionType = () => {
  return dispatch => {
    dispatch(setLoading(true));
    axios
      .get(`${ API_URL }`)
      .then(res => dispatch(setCasks(res.data)))
      .catch(e => console.error(e))
      .finally(() => setLoading(false));
  };
};

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
        dispatch(resetModal());
        dispatch(getCasks());
        dispatch(getActiveCask(res.data.createdCask.id));
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
        dispatch(getCasks());
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
        dispatch(getCasks());
        dispatch(getActiveOutturn(outturnId));
      })
      .catch(e => console.error(e))
      .finally(() => dispatch(setLoading(false)));
  }
};

export const editCask: ThunkFunctionType = (caskId, cask) => {
  console.log({cask}, {position: cask.caskPosition})
  return dispatch => {
    dispatch(setLoading(true));
    axios
      .put(`${ API_URL }${ caskId }`, { ...cask })
      .then(() => {
        dispatch(getCasks());
        dispatch(getActiveCask(caskId));
      })
      .catch(e => console.error(e))
      .finally(() => dispatch(setLoading(false)));
  };
};
