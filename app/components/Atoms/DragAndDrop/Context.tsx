import React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import { GenericComponentProps } from '../../../types';

interface ComponentProps extends GenericComponentProps {
  onDragEnd: (DropResult) => void;
};

const Context: React.FC<ComponentProps> = ({
  onDragEnd,
  children
}) => <DragDropContext onDragEnd={ onDragEnd }>{ children }</DragDropContext>;

export default Context;
