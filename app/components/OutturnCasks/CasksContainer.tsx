import * as React from 'react';
const { useEffect } = React;
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useTypedSelector, createButton } from '../../utils';

import PageHeader from '../Header/PageHeader';
import CaskList from './CaskList'
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledDiv: { Column },
} = StyledComponents;

import * as actions from '../../redux/actions';
const {
  markCaskActions: { resetMarkedCasks },
  modalActions: { setModal }
} = actions;

import * as thunks from '../../redux/thunks';
const {
  activeOutturnThunks: { getActiveOutturn },
  casksThunks: { addNewCask, deleteManyCasks }
} = thunks;

import { ParamTypes } from '../../types/index';

export default () => {

  const dispatch = useDispatch();

  const { outturnId } = useParams<ParamTypes>();
  const { activeOutturn, activeCask, markedCasks } = useTypedSelector(state => state);

  useEffect(() => {
    dispatch(getActiveOutturn(outturnId))
    dispatch(resetMarkedCasks())
  }, []);

  const createCaskModal = {
    modalHeader: `Creating a new cask`,
    stateShape: {
      name: '',
      caskNumber: '',
    },
    confirmButton: {
      type: 'CREATE',
      text: 'Create cask',
      arguments: [ activeOutturn.id ],
      onClickFunction: addNewCask,
    },
  };

  const deleteManyCasksModal = {
    modalHeader: 'Are you sure you want to delete these casks?',
    confirmButton: {
      type: 'DELETE',
      text: 'Delete Casks',
      arguments: [ markedCasks, activeCask.id, activeOutturn.id ],
      onClickFunction: deleteManyCasks,
    },
  }

  const pageHeaderProps = {
    subNavigationProps: {
      link: '/',
      destination: '< Back'
    },
    toolbarProps: {
      pageTitle: activeOutturn.name,
      addButtonProps: {
        onClickProps: createButton(
          setModal,
          '+ Add a cask',
          createCaskModal
        )
      },
      deleteButtonProps: {
        variant: 'tertiary',
        disabled: !markedCasks.length,
        onClickProps: createButton(
          setModal,
          'X Delete Marked Casks',
          deleteManyCasksModal
        )
      }
    }
  }

  return (
    <Column>
      <PageHeader { ...pageHeaderProps }/>
      <CaskList />
    </Column>
  )
}