import { combineReducers } from "redux";
import dialogActionTypes from './constants';

import {
  DialogTypes,
  ReducerFunctionType,
  StateType
} from '../../types';

const dialogOpenInitialState: StateType<boolean> = false as boolean;
const dialogContentInitialState: StateType<DialogTypes> = {} as DialogTypes;

const dialogOpen: ReducerFunctionType<typeof dialogOpenInitialState, DialogTypes> = (state = dialogOpenInitialState, action) => {
  switch (action.type) {
    case dialogActionTypes.SET_DIALOG:
      return true;

    case dialogActionTypes.RESET_DIALOG:
      return dialogOpenInitialState;

    default:
      return state;
  };
}

const dialogContent: ReducerFunctionType<typeof dialogContentInitialState, DialogTypes> = (state = dialogContentInitialState, action) => {
  switch (action.type) {
    case dialogActionTypes.SET_DIALOG:
      return action.payload;

    case dialogActionTypes.RESET_DIALOG:
      return dialogContentInitialState;

    default:
      return state;
  };
};

export default combineReducers({
  dialogOpen,
  dialogContent
});
