import React from "react";
import { DndContext } from "@dnd-kit/core";

interface ComponentProps {
  onDragEnd: any;
};

const DragAndDrop: React.FC<ComponentProps> = ({ onDragEnd, children }) => (
  <DndContext onDragEnd={ onDragEnd }>{ children }</DndContext>
);

export default DragAndDrop;
