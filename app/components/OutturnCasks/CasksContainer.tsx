import * as React from 'react';
const { useEffect } = React;
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useTypedSelector, createButton } from '../../utils';

import PageHeader from '../Header/PageHeaderManager';
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
  allCasksThunks: { addNewCask, deleteManyCasks }
} = thunks;

import { Modal, PageHeaderPropTypes, ParamTypes } from '../../types/index';
import { CreateCaskModalState } from '../../types/Interfaces/modal';

export default () => {

  const dispatch = useDispatch();

  const { outturnId } = useParams<ParamTypes>();
  const {
    activeOutturn,
    activeCask,
    markedCasks,
    activeUser
  } = useTypedSelector(state => state);

  useEffect(() => {
    dispatch(getActiveOutturn(outturnId))
    dispatch(resetMarkedCasks())
  }, []);

  const evaluateUserType = activeUser.userType == 'Admin' || activeUser.userType == 'Standard';

  const createCaskModal: Modal<CreateCaskModalState> = {
    modalHeader: `Creating a new cask`,
    modalState: {
      name: '',
      caskNumber: '',
    },
    confirmButton: {
      text: 'Create cask',
      arguments: [
        activeOutturn.id,
        activeOutturn.casks,
        null,
        null
      ],
      onClick: addNewCask,
    },
  };

  const deleteManyCasksModal: Modal = {
    modalHeader: 'Are you sure you want to delete these casks?',
    confirmButton: {
      text: 'Delete Casks',
      arguments: [
        markedCasks,
        activeCask.id,
        activeOutturn.id
      ],
      onClick: deleteManyCasks,
    },
  }

  const pageHeaderProps: PageHeaderPropTypes = {
    subNavigationProps: {
      link: '/',
      destination: '< Back'
    },
    toolbarProps: {
      pageTitle: activeOutturn.name,
      addButtonProps: evaluateUserType
      && {
          // onClick: createButton(
          //   setModal,
          //   '+ Add a cask',
          //   createCaskModal
          // )
      },
      deleteButtonProps: evaluateUserType
      && {
          // variant: 'tertiary',
          // disabled: !markedCasks.length,
          // onClick: createButton(
          //   setModal,
          //   'X Delete Marked Casks',
          //   deleteManyCasksModal
          // )
      },
    }
  }

  return (
    <Column>
      <PageHeader { ...pageHeaderProps }/>
      <CaskList />
    </Column>
  )
}