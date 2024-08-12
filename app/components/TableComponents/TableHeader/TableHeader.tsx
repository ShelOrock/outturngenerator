import React from "react";

import StyledTableHeader from "./styles";

 import { ComponentProps } from "./types";

const TableHeader: React.FC<ComponentProps> = ({ children }) => <StyledTableHeader>{ children }</StyledTableHeader>;

export default TableHeader;
