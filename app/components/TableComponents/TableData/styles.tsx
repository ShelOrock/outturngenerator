import styled from "styled-components";

import { ElementProps } from "./types";

const StyledTableData = styled.td<ElementProps>`
  padding: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default StyledTableData;
