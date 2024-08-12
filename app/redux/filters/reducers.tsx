import filtersActionTypes from "./constants";

import { ReducerFunctionType, StateType } from '../../types/index';

const initialState: StateType<{}> = {};

const filters: ReducerFunctionType<typeof initialState, { [key: string]: string[] }, any> = (state = initialState, action) => {
  switch(action.type) {
    case filtersActionTypes.SET_FILTERS:
      return action.payload;

    case filtersActionTypes.RESET_FILTERS: 
      return initialState;

    case filtersActionTypes.ADD_FILTER:
      if(!state[action.payload.type]) {
        return {
          ...state,
          [action.payload.type]: [
            action.payload.filter
          ]
        };
      };

      return {
        ...state,
        [action.payload.type]: [
          ...state[action.payload.type], action.payload.filter
        ]
      };

    case filtersActionTypes.DELETE_FILTER:
      return {
        ...state,
        [action.payload.type]: [
          ...state[action.payload.type].filter(filter => filter !== action.payload.filter)
        ]
      };

    default:
      return state;
  };
};

export default filters;
