import * as React from 'react';
const { useEffect } = React;
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useTypedSelector } from '../../utils';

import PageHeader from '../Header/PageHeader';
import CaskList from './CaskList'
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledDiv: { Column },
} = StyledComponents;

import * as actions from '../../redux/actions';
const { markCaskActions: { resetMarkedCasks } } = actions;

import * as thunks from '../../redux/thunks';
const { activeOutturnThunks: { getActiveOutturn } } = thunks;

import { createModalButton } from '../../buttonProps';
import { createCaskModal, deleteManyCasksModal } from '../../modalProps';

import { ParamTypes } from '../../types/index';

export default () => {

  const dispatch = useDispatch();

  const { outturnId } = useParams<ParamTypes>();
  const { activeOutturn, activeCask, markedCasks } = useTypedSelector(state => state);

  useEffect(() => {
    dispatch(getActiveOutturn(outturnId))
    dispatch(resetMarkedCasks())
  }, []);

  return (
    <Column>
        <PageHeader
          subNavigationProps={ {
            link: '/',
            destination: '< Back'
          } }
          toolbarProps={ {
            pageTitle: activeOutturn.name,
            addButtonProps: {
              onClickProps: createModalButton('+ Add a cask', createCaskModal(activeOutturn.id))
            },
            deleteButtonProps: {
              variant: 'tertiary',
              disabled: !markedCasks.length,
              onClickProps: createModalButton('X Delete Marked Casks', deleteManyCasksModal(markedCasks, activeCask.id, activeOutturn.id))
            }
          } }
        />
      <CaskList />
    </Column>

  )
}