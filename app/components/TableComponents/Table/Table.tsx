import React from "react";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";

import StyledTable from "./styles";
import TableRow from "../TableRow";
import TableHeader from "../TableHeader";
import ComponentMapping from "../../ComponentMapping";
import { DragAndDrop } from "../../DragAndDrop"

import { ComponentProps } from "./types";

const Table: React.FC<ComponentProps> = ({
  headerData,
  bodyData,
  bodyRenderComponent,
  handleOnDragEnd
}) => (
  <DragAndDrop onDragEnd={ handleOnDragEnd }>
    <StyledTable>
      <thead style={ { backgroundColor: "#F8F9FA" } }>
        <TableRow header={ true }>
          <ComponentMapping
            componentData={ headerData }
            renderComponent={ ({ data }) => <TableHeader>{ data }</TableHeader> }
          />
        </TableRow>
      </thead>
      <tbody>
        <SortableContext items={ bodyData } strategy={ verticalListSortingStrategy }>
          <ComponentMapping
            componentData={ bodyData }
            renderComponent={ data => bodyRenderComponent(data) }
          />
        </SortableContext>
      </tbody>
    </StyledTable>
  </DragAndDrop>
);

export default Table;
