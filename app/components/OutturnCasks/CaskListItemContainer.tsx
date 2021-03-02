import * as React from "react";
import { Draggable } from "react-beautiful-dnd";

import CaskListItem from './CaskListItem';

export default ({ cask, index, sortMethod }: any) => {

  return (
    <Draggable draggableId={ cask.id } index={ index }>
      {(provided) => (
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
      )}
    </Draggable>
  );
};
