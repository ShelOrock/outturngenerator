import * as actions from './redux/actions';
import { modal } from './redux/modal/reducers';
const { modalActions: { setModal } } = actions;

import * as thunks from './redux/thunks';
const { casksThunks: { editCask } } = thunks;

export const saveCaskButton = (caskId, cask) => ({
  text: 'Save',
  arguments: [ caskId, cask ],
  onClickFunction: editCask
});

export const deleteCaskButton = (modalProps, text) => ({
  text,
  arguments: [ modalProps ],
  onClickFunction: setModal
});

export const addCaskButton = (modalProps, text) => ({
  text,
  arguments: [ modalProps ],
  onClickFunction: setModal
})