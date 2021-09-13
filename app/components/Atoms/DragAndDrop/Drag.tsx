import React from 'react';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';

import { DragAndDropContainers } from '../../Containers';

import { GenericComponentProps } from '../../../types';

interface ComponentProps extends GenericComponentProps {
  caskId: string;
  index: number;
};

const Drag: React.FC<ComponentProps> = ({
  caskId,
  index,
  children,
}) => (
  <Draggable
    draggableId={ caskId }
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
