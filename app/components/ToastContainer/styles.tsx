import styled from "styled-components";

import { ElementProps } from "./types";

const StyledToastContainer = styled.div<ElementProps>`
  position: fixed;
  width: 300px;
  bottom: 32px;
  left: 32px;
`;

export default StyledToastContainer;
