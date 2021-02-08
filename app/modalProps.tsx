import * as actions from './redux/actions';
const { modalActions: { setModal } } = actions;

import * as thunks from './redux/thunks';
const {
  outturnsThunks: {
    addOutturn,
    deleteManyOutturns,
    deleteOutturn,
  },
  casksThunks: {
    addNewCask,
    deleteCask,
    deleteManyCasks
  }
} = thunks

import { ModalFunctionType, Cask, Outturn } from './types/index';

export const createCaskModal: ModalFunctionType = (activeOutturnId: string) => ({
  stateShape: {
    name: '',
    caskNumber: '',
  },
  inputModules: [
    {
      inputText: 'Name this cask',
      label: 'Name',
    },
    {
      inputText: 'Number this cask',
      label: 'Number',
    },
  ],
  confirmButton: {
    type: 'CREATE',
    text: 'Create cask',
    arguments: [ activeOutturnId ],
    onClickFunction: addNewCask,
  },
  cancelButton: {
    text: 'Cancel',
    arguments: [ {} ],
    onClickFunction: setModal
  }
});

export const createOutturnModalProps: ModalFunctionType = () => ({
  stateShape: {
    name: '',
    description: ''
  },
  inputModules: [
    {
      inputText: 'Name this Outturn',
      label: 'name',
    },
    {
      inputText: 'Body text',
      label: 'description',
    }
  ],
  confirmButton: {
    type: 'CREATE',
    text: 'Create outturn',
    arguments: [],
    onClickFunction: addOutturn,
  },
  cancelButton: {
    text: 'Cancel',
    arguments: [ {} ],
    onClickFunction: setModal
  }
});

export const deleteCaskModal: ModalFunctionType = (cask: Cask, activeOutturnId: string) => ({
  modalHeader: `Are you sure you want to delete ${ cask.caskNumber } ${ cask.name }`,
  confirmButton: {
    type: 'DELETE',
    text: `Delete Cask no. ${ cask.caskNumber }`,
    arguments: [ cask.id, activeOutturnId ],
    onClickFunction: deleteCask
  },
  cancelButton: {
    text: 'Cancel',
    arguments: [ {} ],
    onClickFunction: setModal
  }
})


export const deleteManyCasksModalProps: ModalFunctionType = (markedCasks: string[], activeCaskId: string, activeOutturnId: string) => ({
  modalHeader: 'Are you sure you want to delete these casks?',
  confirmButton: {
    type: 'DELETE',
    text: 'Delete Casks',
    arguments: [ markedCasks, activeCaskId, activeOutturnId ],
    onClickFunction: deleteManyCasks,
  },
  cancelButton: {
    text: 'Cancel',
    arguments: [ {} ],
    onClickFunction: setModal
  }
});


export const deleteOutturnModalProps: ModalFunctionType = (outturn: Outturn, activeOutturnId: string) => ({
  modalHeader: `Are you sure you want to delete ${ outturn.name }`,
  confirmButton: {
    type: 'DELETE',
    text: 'Delete',
    arguments: [ outturn.id, activeOutturnId ],
    onClickFunction: deleteOutturn,
  },
  cancelButton: {
    text: 'Cancel',
    arguments: [ {} ],
    onClickFunction: setModal
  }
});

export const deleteManyOutturnsModalProps: ModalFunctionType = (markedOutturns: string[]) => ({
  modalHeader: 'Are you sure you want to delete these outturns?',
  confirmButton: {
    type: 'DELETE',
    text: 'Delete outturns',
    arguments: [ markedOutturns ],
    onClickFunction: deleteManyOutturns,
  },
  cancelButton: {
    text: 'Cancel',
    arguments: [ {} ],
    onClickFunction: setModal
  }
});
