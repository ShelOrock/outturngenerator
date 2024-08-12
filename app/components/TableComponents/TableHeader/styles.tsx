import styled from "styled-components";

import { ElementProps } from "./types";

const StyledTableHeader = styled.td<ElementProps>`
  padding: 8px;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
`;

export default StyledTableHeader;
