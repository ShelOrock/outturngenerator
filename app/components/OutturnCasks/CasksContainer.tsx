import * as React from 'react';
const { useEffect } = React;
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useTypedSelector } from '../../utils';

import PageHeader from '../PageHeader/PageHeader';
import SubNavigation from '../Navigation/SubNavigation';
import CaskList from './CaskList'
import ActiveCask from './ActiveCask';
import ButtonManager from '../Button/ButtonManager';
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledDiv: { BodyDiv, Row, Column },
  StyledCask: { CaskListDiv },
} = StyledComponents;

import * as actions from '../../redux/actions';
const { markCaskActions: { resetMarkedCasks } } = actions;

import * as thunks from '../../redux/thunks';
const { activeOutturnThunks: { getActiveOutturn } } = thunks;

import { createModalButton } from '../../buttonProps';
import { createCaskModal, deleteManyCasksModalProps } from '../../modalProps';

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
    <div>
      <Column>
        <SubNavigation link={ '/' } destination='< Back' />
          <PageHeader
            pageTitle={ activeOutturn.name }
            addButtonProps={ { onClickProps: createModalButton('+ Add a cask', createCaskModal(activeOutturn.id)) } }
            deleteButtonProps={ {
              variant: 'secondary',
              disabled: !markedCasks.length,
              onClickProps: createModalButton('X', deleteManyCasksModalProps(markedCasks, activeCask.id, activeOutturn.id))
            } }
          />
      </Column>
      <BodyDiv>
        <CaskListDiv>
          <Column>
            <CaskList />
          </Column>
        </CaskListDiv>
        <ActiveCask />
      </BodyDiv>
    </div>
  )
}