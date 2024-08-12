import styled from "styled-components";

import { utilityFunctions } from "../../../utilities";

import { ElementProps } from "./types";

const StyledTable = styled.table<ElementProps>`
  display: block;
  height: 420px;
  width: 100%;
  border-collapse: collapse;
  overflow: scroll;

  ${ ({ ...spacingProps }) => utilityFunctions.createSpacing(spacingProps) };
`;

export default StyledTable;
