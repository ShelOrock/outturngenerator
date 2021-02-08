import * as React from 'react';
const { useState, useEffect } = React;
import { useDispatch } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useTypedSelector } from '../../utils';

import CaskListItem from './CaskListItem';
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledDiv: { Row },
  StyledButton: { Button, SmallButton },
  StyledCask: { CaskList, AddCaskButton },
} = StyledComponents;

import * as actions from '../../redux/actions';
const { 
  markCaskActions: {
    markAllCasks,
    unmarkAllCasks,
    resetMarkedCasks,
  },
  modalActions: { setModal }
} = actions;

import * as thunks from '../../redux/thunks';
const { casksThunks: { editCask } } = thunks;

import { deleteManyCasksModalProps } from '../../modalProps';

import { InputOnChangeType, ButtonOnClickType } from '../../types/index';

export default () => {

  const dispatch = useDispatch();

  const { activeOutturn, activeCask, isLoading, markedCasks } = useTypedSelector(state => state);
  const { casks } = activeOutturn;
  const [ localCaskOrder, setLocalCaskOrder ] = useState([])

  useEffect(() => {
    dispatch(resetMarkedCasks());
  }, []);

  useEffect(() => {
    setLocalCaskOrder(casks ? casks.map(cask => cask) : []);
  }, [casks])

  const handleAllCasksOnCheck: InputOnChangeType = () => {
    if(markedCasks.length === casks.length) dispatch(unmarkAllCasks());
    else dispatch(markAllCasks([...casks.map(cask => cask.id)]));
  }

  const onDragEnd = result => {
    if(!result.destination) return;
    if(result.destination.index === result.source.index) return;

    const reorderCasks = (list, startIndex, endIndex) => {
      const element = list[startIndex];
      list.splice(startIndex, 1);
      list.splice(endIndex, 0, element);

      return list;
    }

    const reorderedCasks = reorderCasks(localCaskOrder, result.source.index, result.destination.index);
    setLocalCaskOrder(reorderedCasks);
  }

  const handleEditCasks: ButtonOnClickType = () => localCaskOrder.forEach((cask, idx) => dispatch(editCask(cask.id, { ...cask, caskPosition: idx })));
  
  const handleDeleteManyCasks: ButtonOnClickType = () => dispatch(setModal(deleteManyCasksModalProps(markedCasks, activeCask.id, activeOutturn.id)));

  return (

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
            ? localCaskOrder.map((cask, idx) => <CaskListItem cask={ {...cask, caskPosition: idx } } key={ cask.id }/>)
            : null
          }
          { provided.placeholder }
          </div>
        )}
      </Droppable>
    </DragDropContext>
    <Button>Generate Outturn</Button>
    
  </CaskList>
  )
}