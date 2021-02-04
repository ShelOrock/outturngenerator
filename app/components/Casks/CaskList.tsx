import * as React from 'react';
const { useEffect } = React;
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../../utils';

import CaskListItem from './CaskListItem';
import ActiveCask from './ActiveCask';
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledType: { Header, Subheader },
  StyledDiv: {
    BodyDiv,
    Column,
    Row
  },
  StyledLink: { LinkButton },
  StyledButton: { Button, SmallButton },
  StyledCask: {
    CaskList,
    CaskListDiv,
    AddCaskButton,
  },
} = StyledComponents;

import * as actions from '../../redux/actions';
const { 
  markCaskActions: {
    markAllCasks,
    unmarkAllCasks,
    resetMarkedCasks
  },
  modalActions: { setModal }
} = actions;

import * as thunks from '../../redux/thunks';
const { activeOutturnThunks: { getActiveOutturn }} = thunks;

import { createCaskModalProps, deleteManyCasksModalProps } from '../../modalProps';

import {
  InputOnChangeType,
  ButtonOnClickType,
  ParamTypes
} from '../../types/index';

export default () => {

  const dispatch = useDispatch();

  const { outturnId } = useParams<ParamTypes>();
  const { activeOutturn, activeCask, isLoading, markedCasks } = useTypedSelector(state => state);
  const { casks, name } = activeOutturn;

  useEffect(() => {
    dispatch(getActiveOutturn(outturnId))
    dispatch(resetMarkedCasks());
  }, []);

  const handleAllCasksOnCheck: InputOnChangeType = () => {
    if(markedCasks.length === casks.length) dispatch(unmarkAllCasks());
    else dispatch(markAllCasks([...casks.map(cask => cask.id)]));
  }

  const handleDeleteManyCasks: ButtonOnClickType = () => dispatch(setModal(deleteManyCasksModalProps(markedCasks, activeCask.id, activeOutturn.id)));

  return (
    <div>
    <LinkButton to={ '/' }>Back</LinkButton>
    <Header>{ name }</Header>
      <BodyDiv>
        <CaskListDiv>
          <Column>
            <CaskList>
              <Row>
                <input
                  type='checkbox'
                  checked={ casks && casks.length && casks.length === markedCasks.length }
                  onChange={ handleAllCasksOnCheck }
                />
                <SmallButton variant='secondary' disabled={ !!isLoading || !markedCasks.length } onClick={ handleDeleteManyCasks }>X</SmallButton>
              </Row>
            { 
              casks && casks.length
              ? casks.map((cask, idx) => <CaskListItem key={ idx } cask={ cask } />)
              : null
            }
              <AddCaskButton onClick={ () => dispatch(setModal(createCaskModalProps(activeOutturn.id))) }>
                <Subheader textAlign='center'>ADD A CASK</Subheader>
              </AddCaskButton>
              <Button>Generate Outturn</Button>
            </CaskList>
          </Column>
        </CaskListDiv>
        <ActiveCask />
      </BodyDiv>
    </div>
  )
}