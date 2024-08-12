import React from "react";
import { useDroppable } from "@dnd-kit/core";

interface ComponentProps {
  id: string;
};

const Droppable: React.FC<ComponentProps> = ({ id, children }) => {

  const { setNodeRef, isOver } = useDroppable({ 
    id
  });

  return (
    <div ref={ setNodeRef }>{ children }</div>
  );
};

export default Droppable;
