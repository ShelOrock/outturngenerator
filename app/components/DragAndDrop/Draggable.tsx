import React from "react";
import { useSortable } from "@dnd-kit/sortable";

import StyledDraggable from "./styles";

interface ComponentProps {
  id: string;
};

const Draggable: React.FC<ComponentProps> = ({ id, children }) => {
  
  const {
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  return (
    <StyledDraggable
      ref={ setNodeRef }
      $transformX={ transform?.x }
      $transformY={ transform?.y }
      $transition={ transition }
    >{ children }</StyledDraggable>
  );
};

export default Draggable;
