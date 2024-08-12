import { combineReducers } from "redux";
import entitiesActionTypes from './constants';

import {
  ReducerFunctionType,
  StateType
} from '../types';

import { AppDataSlices } from "../../utilities";

const idsInitialState: StateType<string[]> = [];
const entitiesInitialState: StateType<{ [id: string]: any }> = {};
const activeIdInitialState: StateType<string> = "";
const appDataInitialState: StateType<{
  ids: typeof idsInitialState,
  entities: typeof entitiesInitialState,
  activeId: typeof activeIdInitialState
}> = {
  ids: idsInitialState,
  entities: entitiesInitialState,
  activeId: activeIdInitialState
};

const ids: ReducerFunctionType<typeof idsInitialState, string[], any> = (state = idsInitialState, action) => {
  switch(action.type) {
    case entitiesActionTypes.SET_ENTITIES:
      return action.payload.result;

    case entitiesActionTypes.RESET_ENTITIES:
      return idsInitialState;

    case entitiesActionTypes.ADD_ENTITY:
      return [ ...state, action.payload.result ];

    case entitiesActionTypes.DELETE_ENTITY:
      return state.filter(id => id !== action.payload);

    default:
      return state;
  };
};

const entities: ReducerFunctionType<typeof entitiesInitialState, { [id: string]: any }, any> = (state = entitiesInitialState, action) => {
  switch(action.type) {
    case entitiesActionTypes.SET_ENTITIES:
      return action.payload.entities[action.entity];

    case entitiesActionTypes.RESET_ENTITIES:
      return entitiesInitialState;

    case entitiesActionTypes.ADD_ENTITY:
      return {
        ...state,
        ...action.payload.entities[action.entity]
      };

    case entitiesActionTypes.DELETE_ENTITY:
      const {
        [action.payload]: entityToRemove,
        ...remainingState
      } = state;
      return remainingState;

    default:
      return state;
  };
};

const activeId: ReducerFunctionType<typeof activeIdInitialState, string, any> = (state = activeIdInitialState, action) => {
  switch(action.type) {
    case entitiesActionTypes.SET_ACTIVE_ENTITY:
      return action.payload;

    case entitiesActionTypes.RESET_ACTIVE_ENTITY:
      return idsInitialState;

    default:
      return state;
  };
};

const createAppDataReducer = entity => (state = appDataInitialState, action) => {
  switch(action.entity) {
    case `${ entity }`:
      return {
        ids: ids(state.ids, action),
        entities: entities(state.entities, action),
        activeId: activeId(state.activeId, action)
      };

    default:
      return state;
  };
};

export default combineReducers({
  outturns: createAppDataReducer(AppDataSlices.OUTTURNS),
  casks: createAppDataReducer(AppDataSlices.CASKS)
});
