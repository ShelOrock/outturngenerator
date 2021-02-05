import * as React from 'react';
const { useState, useEffect } = React;
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  DragDropContext,
  Droppable,
  Draggable
} from 'react-beautiful-dnd';
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
  const [ localCaskOrder, setLocalCaskOrder ] = useState(casks)

  useEffect(() => {
    if(!casks) {
      dispatch(getActiveOutturn(outturnId))
      dispatch(resetMarkedCasks());
    }

    setLocalCaskOrder(casks)
  }, [casks]);

  const handleAllCasksOnCheck: InputOnChangeType = () => {
    if(markedCasks.length === casks.length) dispatch(unmarkAllCasks());
    else dispatch(markAllCasks([...casks.map(cask => cask.id)]));
  }

  const onDragEnd = result => {
    if(!result.destination) return;
    if(result.destination.index === result.source.index) return;

    const caskOrderCopy = [ ...localCaskOrder ]
    const [removed] = caskOrderCopy.splice(result.source.index - 1, 1)
    caskOrderCopy.splice(result.destination.index - 1, 0, removed)
    console.log({caskOrderCopy})
    setLocalCaskOrder([...caskOrderCopy]);
  }
  console.log({ localCaskOrder });
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
              <DragDropContext onDragEnd={ onDragEnd }>
                <Droppable droppableId='list'>
                  { provided => (
                    <div ref={ provided.innerRef } { ...provided.droppableProps }>
                    { 
                      localCaskOrder 
                      ? localCaskOrder.map(cask => <CaskListItem cask={ cask } key={ cask.id }/>)
                      : null
                    }
                    { provided.placeholder }
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
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