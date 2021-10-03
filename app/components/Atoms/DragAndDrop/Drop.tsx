import React from 'react';
import { Droppable, DroppableProvided } from 'react-beautiful-dnd';

import { StyledDragAndDrop } from '../../styledcomponents';

import { GenericComponentProps } from '../../../types';

interface ComponentProps extends GenericComponentProps {};

const Drop: React.FC<ComponentProps> = ({ children }) => (
  <Droppable droppableId='droppable'>
    { (provided: DroppableProvided) => (
       <StyledDragAndDrop.Drop
        ref={ provided.innerRef }
        { ...provided.droppableProps }
      >
        { children }
        { provided.placeholder }
      </StyledDragAndDrop.Drop>
    ) }
  </Droppable>
);

export default Drop;
