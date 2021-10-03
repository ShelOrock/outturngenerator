import React from 'react';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';

import { StyledDragAndDrop } from '../../styledcomponents';

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
      <StyledDragAndDrop.Drag
        ref={ provided.innerRef }
        { ...provided.draggableProps }
      >{ React.cloneElement(children as React.ReactElement<any>, { dragHandleProps: provided.dragHandleProps }) }</StyledDragAndDrop.Drag>
    ) }
  </Draggable>
);

export default Drag;
