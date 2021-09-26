import React from 'react';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';

import { DragAndDropContainers } from '../../Containers';

import { GenericComponentProps } from '../../../types';

interface ComponentProps extends GenericComponentProps {
  id: string;
  index: number;
};

const Drag: React.FC<ComponentProps> = ({
  id,
  index,
  children,
}) => (
  <Draggable
    draggableId={ id }
    index={ index }
  >
    { (provided: DraggableProvided): JSX.Element => (
      <DragAndDropContainers.Drag
        ref={ provided.innerRef }
        { ...provided.draggableProps }
        { ...provided.dragHandleProps }
      >{ children }</DragAndDropContainers.Drag>
    ) }
  </Draggable>
);

export default Drag;
