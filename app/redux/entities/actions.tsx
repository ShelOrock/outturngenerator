import entitiesActionTypes from './constants';

import { ActionFunctionType } from '../types';

const setEntities: ActionFunctionType<any> = (entity, payload) => ({
  entity,
  type: entitiesActionTypes.SET_ENTITIES,
  payload
});

const setActiveEntity: ActionFunctionType<any> = (entity, payload) => ({
  entity,
  type: entitiesActionTypes.SET_ACTIVE_ENTITY,
  payload
});

const addEntity: ActionFunctionType<any> = (entity, payload) => ({
  entity,
  type: entitiesActionTypes.ADD_ENTITY,
  payload
});

const updateEntity: ActionFunctionType<any> = (entity, payload) => ({
  entity,
  type: entitiesActionTypes.UPDATE_ENTITY,
  payload
});

const deleteEntity: ActionFunctionType<any> = (entity, payload) => ({
  entity,
  type: entitiesActionTypes.DELETE_ENTITY,
  payload
});

const resetEntities: ActionFunctionType = entity => ({
  entity,
  type: entitiesActionTypes.RESET_ENTITIES
});

const resetActiveEntity: ActionFunctionType = entity => ({
  entity,
  type: entitiesActionTypes.RESET_ACTIVE_ENTITY
});

export {
  setEntities,
  setActiveEntity,
  addEntity,
  updateEntity,
  deleteEntity,
  resetEntities,
  resetActiveEntity
};
