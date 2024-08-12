import axios from 'axios';
import { normalize } from "normalizr";

import apiEndpoints from "../../api";

import {
  dialogActions,
  toastActions,
  loadingActions,
  entitiesActions
} from "../actions";

import { ThunkFunctionType } from "../types";
import { Cask } from '../../types';

import { caskSchemas } from "../schemas";

import { AppDataSlices } from "../../utilities";

const getCasks: ThunkFunctionType = () => (
  async dispatch => {
    try {
      dispatch(loadingActions.setLoading(true));

      const { data } = await axios.get(`${ apiEndpoints.BASE_URL }/${ apiEndpoints.CASKS_ENDPOINT }`);

      const normalizedData = normalize(data, caskSchemas.casks);
      dispatch(entitiesActions.setEntities(AppDataSlices.CASKS, normalizedData));

    } catch(e) {
      console.error(e);

    } finally {
      dispatch(loadingActions.setLoading(false));
    };
  }
);

const getOneCask: ThunkFunctionType = caskId => (
  async dispatch => {
    try {
      dispatch(loadingActions.setLoading(true));
      const response = await axios.get(`${ apiEndpoints.BASE_URL }/${ apiEndpoints.CASKS_ENDPOINT }/${ caskId }`);

    } catch(e) {
      console.error(e);

    } finally {
      dispatch(loadingActions.setLoading(false));
    };
  }
);

const createCask: ThunkFunctionType = (payload: any) => (
  async dispatch => {
    try {
      dispatch(loadingActions.setLoading(true));

      const { data } = await axios.post(`/${ apiEndpoints.BASE_URL }/${ apiEndpoints.CASKS_ENDPOINT }`, payload);
      const normalizedData = normalize({ id: data.id, ...payload }, caskSchemas.cask);
      dispatch(entitiesActions.addEntity(AppDataSlices.CASKS, normalizedData));

      dispatch(toastActions.addToast({
        id: 0,
        status: 'SUCCESS',
        message: data.message
      }));

    } catch(e) {
      dispatch(toastActions.addToast({
        id: 0,
        status: 'SUCCESS',
        message: "Error creating cask!"
      }));
      console.error(e);
      
    } finally {
      dispatch(dialogActions.resetDialog());
      dispatch(loadingActions.setLoading(false));
    };
  }
);

const editCask: ThunkFunctionType = (caskId: string, cask: Cask) => (
  async dispatch => {
    try {
      dispatch(loadingActions.setLoading(true));
      await axios.put(`${ apiEndpoints.BASE_URL }/${ caskId }`, cask)

    } catch(e) {
      console.error(e);

    } finally {
      dispatch(loadingActions.setLoading(false));
    };
  }
);

const editManyCasks: ThunkFunctionType = (outturnId, casks) => (
  async dispatch => {
    try {
      dispatch(loadingActions.setLoading(true));
      await axios.post(`${ apiEndpoints.BASE_URL }/${ apiEndpoints.CASKS_ENDPOINT }`, { casks });
      // dispatch(activeOutturnThunks.getActiveOutturn(outturnId));

    } catch(e) {
      console.error(e);

    } finally {
      dispatch(loadingActions.setLoading(false));
    };
  }
);

const deleteCask: ThunkFunctionType = (caskId: string) => (
  async dispatch => {
    try {
      dispatch(loadingActions.setLoading(true));
      const { data } = await axios.delete(`/${ apiEndpoints.BASE_URL }/${ apiEndpoints.CASKS_ENDPOINT }/${ caskId }`);

      const normalizedData = normalize({ id: caskId }, caskSchemas.cask);
      dispatch(entitiesActions.deleteEntity(AppDataSlices.CASKS, normalizedData));

      dispatch(toastActions.addToast({
        status: "SUCCESS",
        message: data.message
      }));

    } catch(e) {
      console.error(e);
      dispatch(toastActions.addToast({
        status: "FAIL",
        message: "Error deleting task!"
      }));

    } finally {
      dispatch(dialogActions.resetDialog());
      dispatch(loadingActions.setLoading(false));
    };
  }
);

const deleteManyCasks: ThunkFunctionType = (
  markedCasks: string[],
  activeCaskId: string,
  outturnId,
  sort,
  filters
) => (
  async dispatch => {
    try {
      dispatch(loadingActions.setLoading(true));
      const response = await axios.post(`${ apiEndpoints.BASE_URL }/${ apiEndpoints.CASKS_ENDPOINT }/delete-many`, { markedCasks })
      dispatch(toastActions.addToast({
        id: 0,
        status: 'SUCCESS',
        message: response.data.message
      }));

      if (markedCasks.includes(activeCaskId)) {
        // dispatch(activeCaskActions.resetActiveCask());
      };

      dispatch(dialogActions.resetDialog());
      dispatch(getCasks(sort, filters));
      // dispatch(activeCaskActions.resetActiveCask());

    } catch(e) {
      console.error(e);

    } finally {
      dispatch(loadingActions.setLoading(false))
    };
  }
);

export {
  getCasks,
  getOneCask,
  createCask,
  editCask,
  editManyCasks,
  deleteCask,
  deleteManyCasks
};
