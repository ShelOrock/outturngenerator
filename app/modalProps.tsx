import {
  addOutturn,
  deleteManyOutturns,
  deleteOutturn
} from './redux/outturns/thunks';
import {
  addNewCask,
  deleteCask,
  deleteManyCasks,
} from './redux/casks/thunks';

import { ModalFunctionType, Cask, Outturn } from './types/index';

export const createCaskModalProps: ModalFunctionType = (activeOutturnId: string) => ({
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
  buttonModule: {
    type: 'CREATE',
    buttonText: 'Create cask',
    arguments: [ activeOutturnId ],
    buttonOnClickFunction: addNewCask,
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
  buttonModule: {
    type: 'CREATE',
    buttonText: 'Create outturn',
    arguments: [],
    buttonOnClickFunction: addOutturn,
  }
});

export const deleteCaskModalProps: ModalFunctionType = (cask: Cask, activeOutturnId: string) => ({
  modalHeader: `Are you sure you want to delete ${ cask.caskNumber } ${ cask.name }`,
  buttonModule: {
    type: 'DELETE',
    buttonText: `Delete Cask no. ${ cask.caskNumber }`,
    arguments: [ cask.id, cask.id, activeOutturnId ],
    buttonOnClickFunction: deleteCask
  },
})


export const deleteManyCasksModalProps: ModalFunctionType = (markedCasks: string[], activeCaskId: string, activeOutturnId: string) => ({
  modalHeader: 'Are you sure you want to delete these casks?',
  buttonModule: {
    type: 'DELETE',
    buttonText: 'Delete Casks',
    arguments: [ markedCasks, activeCaskId, activeOutturnId ],
    buttonOnClickFunction: deleteManyCasks,
  }
});


export const deleteOutturnModalProps: ModalFunctionType = (outturn: Outturn, activeOutturnId: string) => ({
  modalHeader: `Are you sure you want to delete ${ outturn.name }`,
  buttonModule: {
    type: 'DELETE',
    buttonText: 'Delete',
    arguments: [ outturn.id, activeOutturnId ],
    buttonOnClickFunction: deleteOutturn,
  }
});

export const deleteManyOutturnsModalProps: ModalFunctionType = (markedOutturns: string[]) => ({
  modalHeader: 'Are you sure you want to delete these outturns?',
  buttonModule: {
    type: 'DELETE',
    buttonText: 'Delete outturns',
    arguments: [ markedOutturns ],
    buttonOnClickFunction: deleteManyOutturns,
  }
});
