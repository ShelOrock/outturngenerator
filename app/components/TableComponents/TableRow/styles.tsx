import styled from "styled-components";

import { ElementProps } from "./types";

const StyledTableRow = styled.tr<ElementProps>`
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -2px,
    rgba(0, 0, 0, 0.2) 0px 1px 4px -3px;

  border-bottom: 1px solid ${ ({ theme }) => theme.color.neutral.default };

  position: ${ ({ $header }) => $header ? "sticky" : "static" };
  top: 0;

  background-color: #F8F9FA;

`;

export default StyledTableRow;
