import * as React from 'react';
const { useState, useEffect } = React;
import { useDispatch } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useTypedSelector, generateOutturn } from '../../utils';

import CaskListItem from './CaskListItem';
import ButtonManager from '../Button/ButtonManager';
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledDiv: { Row },
  StyledCask: { CaskList },
  StyledForm: { Checkbox }
} = StyledComponents;

import * as actions from '../../redux/actions';
const { 
  markCaskActions: {
    markAllCasks,
    unmarkAllCasks,
    resetMarkedCasks,
  },
} = actions;

import { createButton } from '../../buttonProps';

import { InputOnChangeType } from '../../types/index';

export default () => {

  const dispatch = useDispatch();

  const { activeOutturn, markedCasks } = useTypedSelector(state => state);
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
  
  return (
  <CaskList>
    <Row>
      <Checkbox
        type='checkbox'
        checked={ casks && casks.length && casks.length === markedCasks.length }
        onChange={ handleAllCasksOnCheck }
      />
    </Row>
    <DragDropContext onDragEnd={ onDragEnd }>
      <Droppable droppableId='list'>
        { provided => (
          <div ref={ provided.innerRef } { ...provided.droppableProps }>
          { 
            localCaskOrder 
            ? localCaskOrder.map((cask, idx) => {
              return (
              <Draggable key={ cask.id } draggableId={ cask.id } index={ cask.caskPosition }>
                { provided => (
                  <div
                    ref={ provided.innerRef }
                    { ...provided.draggableProps }
                    { ...provided.dragHandleProps }
                  >
                    <CaskListItem cask={ {...cask, caskPosition: idx } }
/>
                  </div>

                )}
              </Draggable>
              )
            })
            : <Draggable>
              { provided => (
                  <div
                    ref={ provided.innerRef }
                    { ...provided.draggableProps }
                    { ...provided.dragHandleProps }
                  />
                )}
            </Draggable>
          }
          { provided.placeholder }
          </div>
        )}
      </Droppable>
    </DragDropContext>
    <ButtonManager
      variant='primary'
      props={ createButton(generateOutturn(activeOutturn), 'Generate Outturn') }
    />
    
  </CaskList>
  )
}