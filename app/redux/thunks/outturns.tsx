import axios from 'axios';
import { normalize } from "normalizr";

import apiEndpoints from "../../api";

import {
  dialogActions,
  loadingActions,
  toastActions,
  entitiesActions
} from '../actions';

import { outturnSchemas} from "../schemas";

import { Outturn, ThunkFunctionType } from '../../types';

import { AppDataSlices } from "../../utilities";

const getOutturns: ThunkFunctionType = sortBy => (
  async dispatch => {
    try {
      dispatch(loadingActions.setLoading(true));

      const { data } = await axios.get(`${ apiEndpoints.BASE_URL }/${ apiEndpoints.OUTTURNS_ENDPOINT }/?sort_by=${ sortBy }`);

      const normalizedData = normalize(data, outturnSchemas.outturns)
      dispatch(entitiesActions.setEntities(AppDataSlices.OUTTURNS, normalizedData));

    } catch(e) {
      console.error(e);

    } finally {
      dispatch(loadingActions.setLoading(false));
    };
  }
);

const createOutturn: ThunkFunctionType = (payload: any) => (
  async dispatch => {
    try {
      dispatch(loadingActions.setLoading(true));
      const { data } = await axios.post(`${ apiEndpoints.BASE_URL }/${ apiEndpoints.OUTTURNS_ENDPOINT }`, payload);
      const normalizedData = normalize({ id: data.id, ...payload }, outturnSchemas.outturn);
      dispatch(entitiesActions.addEntity(AppDataSlices.OUTTURNS, normalizedData));
      
      dispatch(toastActions.addToast({
        id: 0,
        status: 'SUCCESS',
        message: data.message
      }));

    } catch(e) {
      dispatch(toastActions.addToast({
        id: 0,
        status: 'SUCCESS',
        message: "Error creating Outturn!"
      }));
      console.error(e);

    } finally {
      dispatch(dialogActions.resetDialog());
      dispatch(loadingActions.setLoading(false))
    };
  }
);

const deleteOutturn: ThunkFunctionType = (id: string) => (
  async dispatch => {
    try {
      dispatch(loadingActions.setLoading(true));
      await axios.delete(`${ apiEndpoints.BASE_URL }/${ apiEndpoints.OUTTURNS_ENDPOINT }/${ id }`);
      dispatch(entitiesActions.deleteEntity("outturns", id))
      // dispatch(outturnsActions.deleteOutturn({ id }));
      dispatch(toastActions.addToast({
        status: "SUCCESS",
        message: "Outturn successfully deleted!"
      }));

    } catch(e) {
      console.error(e);
      dispatch(toastActions.addToast({
        status: "FAIL",
        message: "Error deleting outturn!"
      }));

    } finally {
      dispatch(dialogActions.resetDialog());
      dispatch(loadingActions.setLoading(false));
    };
  }
);

const deleteManyOutturns: ThunkFunctionType = (
  markedOutturns: Outturn[],
  activeOutturnId,
  sortBy
) => (
  async dispatch => {
    try {
      dispatch(loadingActions.setLoading(true));
      await axios.post(`${ apiEndpoints.BASE_URL }/${ apiEndpoints.OUTTURNS_ENDPOINT }/delete-many`, { markedOutturns });
      
      dispatch(dialogActions.resetDialog());
      dispatch(getOutturns(sortBy));

    } catch(e) {
      console.error(e);

    } finally {
      dispatch(loadingActions.setLoading(false));
    };
  }
);

export {
  getOutturns,
  createOutturn,
  deleteOutturn,
  deleteManyOutturns
};
