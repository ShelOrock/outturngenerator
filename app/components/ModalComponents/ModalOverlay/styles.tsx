import styled from "styled-components";

import { ElementProps } from "./types";

const StyledModalOverlay = styled.div<ElementProps>`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
`;

export default StyledModalOverlay;
