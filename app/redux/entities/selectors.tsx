import { createSelector } from "@reduxjs/toolkit";

const selectAppDataEntitiesX = (state, entityName) => {
  const selectedSlice = state.appData[entityName];

  if(!selectedSlice) {
    return {};
  };

  return selectedSlice.entities;
};

const selectAppDataIds = (state, entityName) => {
  const selectedSlice = state.appData[entityName];

  if(!selectedSlice) {
    return [];
  };

  return selectedSlice.ids;
};

const selectAppDataActiveId = (state, entityName) => {
  const selectedSlice = state.appData[entityName];

  if(!selectedSlice) {
    return "";
  };

  return selectedSlice.activeId;
};

const selectAppData = (entityName, parameters) => createSelector([
  state => selectAppDataEntitiesX(state, entityName),
  state => selectAppDataIds(state, entityName),
], (entities, ids) => selectAppDataEntities(entities, ids, parameters));

const selectAppDataById = (entityName, parameters) => createSelector([
  state => selectAppDataEntitiesX(state, entityName),
], entities => selectAppDataEntity(entities, parameters));

const selectActiveId = (entityName, parameters) => createSelector([
  state => selectAppDataEntitiesX(state, entityName),
  state => selectAppDataActiveId(state, entityName),
], (entities, activeId) => selectAppDataActiveEntity(entities, activeId, parameters));

const selectAppDataEntities = (entities, ids, {
  filters = null,
  searchAttributes = [],
  searchParameter = "",
  attributes = [],
  sortAttribute = null,
  sortDirection = "",
  limit = 0,
  exclusions = null,
}) => {

  const filteredIds = applyFilters(ids, entities, filters);
  const searchedIds = applySearch(filteredIds, entities, searchAttributes, searchParameter);

  const withExclusions = applyExclusions(searchedIds, entities, exclusions);
  const limitedIds = applyLimit(withExclusions, limit);

  const filteredEntities = limitedIds.map(id => entities[id]);
  const entitiesWithSelectedAttributes = filterAttributes(filteredEntities, attributes);

  const sievedEntities = entitiesWithSelectedAttributes.sort((firstEntity, nextEntity) => {
    if(sortDirection === "ascending") {
      return firstEntity[sortAttribute] - nextEntity[sortAttribute];
    };

    return nextEntity[sortAttribute] - firstEntity[sortAttribute];
  });

  return sievedEntities;
};

const selectAppDataEntity = (entities, {
  id,
  attributes
}) => {

  const selectedEntity = entities[id];

  const entityWithSelectedAttributes = reduceEntityAttributes(selectedEntity, attributes);

  return entityWithSelectedAttributes;
};

const selectAppDataActiveEntity = (entities, activeId, { attributes = [] }) => {
  const activeEntity = entities[activeId];

  if(!activeEntity) {
    return {};
  };

  const entityWithSelectedAttributes = reduceEntityAttributes(activeEntity, attributes);

  return entityWithSelectedAttributes;
};

const applyFilters = (sliceIds, sliceEntities, filters) => {
  if(!filters) {
    return sliceIds;
  };

  const filteredIds = sliceIds.filter(id => {
    const currentEntity = sliceEntities[id];

    if(!currentEntity) {
      return false;
    };

    const matchesFilter = Object.entries(filters).every(([ attribute = "", filter = "" ]: any) => filter.includes(currentEntity[attribute]));

    return matchesFilter;
  });

  return filteredIds;
};

const applySearch = (
  sliceIds,
  sliceEntities,
  searchAttributes,
  searchParameter
) => {
  if(!searchAttributes.length) {
    return sliceIds;
  };

  const searchedIds = sliceIds.filter(id => {
    const currentEntity = sliceEntities[id];

    if(!currentEntity) {
      return false;
    };

    const matchesSearch = searchAttributes.some(attribute => currentEntity[attribute].toUpperCase().includes(searchParameter.toUpperCase()));

    return matchesSearch;
  });

  return searchedIds;
};

const applyLimit = (sliceIds, limit) => {
  if(!limit) {
    return sliceIds;
  };

  return sliceIds.slice(0, limit);
};

const applyExclusions = (sliceIds, sliceEntities, exclusions) => {

  if(!exclusions) {
    return sliceIds;
  };

  const withExclusions = sliceIds.filter(id => {
    const currentEntity = sliceEntities[id];

    if(!currentEntity) {
      return false;
    };

    const matchesExclusion = !Object.entries(exclusions).some(([ attribute = "", exclusion ]: any) => exclusion.includes(currentEntity[attribute]));

    return matchesExclusion;
  });

  return withExclusions;
};

const filterAttributes = (sliceEntities, attributes) => {
  if(!attributes.length) {
    return sliceEntities;
  };

  const entitiesWithFilteredAttributes = sliceEntities.map(entity => reduceEntityAttributes(entity, attributes));

  return entitiesWithFilteredAttributes;
};

const reduceEntityAttributes = (entity, attributes) => {
  const filteredAttributes = attributes.reduce((accumulator, attribute) => ({
    ...accumulator,
    [attribute]: entity[attribute]
  }), {});

  return filteredAttributes;
};

export {
  selectAppData,
  selectAppDataById,
  selectActiveId
};
