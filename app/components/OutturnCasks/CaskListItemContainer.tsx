//Dependency Libraries
import * as React from "react";
import { Draggable } from "react-beautiful-dnd";

//Components
import CaskListItem from './CaskListItem';

export default ({ cask, index, sortMethod }: any) => {

  const renderDragDropProvided = (provided): JSX.Element => (
    <div 
      ref={ provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <CaskListItem
        cask={ cask }
        sortMethod={ sortMethod }
      />
    </div>
  )

  return (
    <Draggable draggableId={ cask.id } index={ index }>
      { (provided) => renderDragDropProvided(provided) }
    </Draggable>
  );
};
