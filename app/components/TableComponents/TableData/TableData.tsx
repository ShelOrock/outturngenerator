import React from "react";

import StyledTableData from "./styles";

 import { ComponentProps } from "./types";

const TableData: React.FC<ComponentProps> = ({ children }) => <StyledTableData>{ children }</StyledTableData>;

export default TableData;
