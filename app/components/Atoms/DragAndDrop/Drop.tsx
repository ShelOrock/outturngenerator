import React from 'react';
import { Droppable, DroppableProvided } from 'react-beautiful-dnd';

import { DragAndDropContainers } from '../../Containers';

import { GenericComponentProps } from '../../../types';

interface ComponentProps extends GenericComponentProps {};

const Drop: React.FC<ComponentProps> = ({ children }) => (
  <Droppable droppableId='list'>
    { (provided: DroppableProvided) => (
       <DragAndDropContainers.Drop
        ref={ provided.innerRef }
        { ...provided.droppableProps }
      >
        { children }
        { provided.placeholder }
      </DragAndDropContainers.Drop>
    ) }
  </Droppable>
);

export default Drop;
