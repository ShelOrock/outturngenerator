import React from "react";

import StyledTableRow from "./styles";

import { ComponentProps } from "./types";

const TableRow: React.FC<ComponentProps> = ({ children, header = false, forwardRef }) => <StyledTableRow ref={ forwardRef } $header={ header }>{ children }</StyledTableRow>;

export default TableRow;
