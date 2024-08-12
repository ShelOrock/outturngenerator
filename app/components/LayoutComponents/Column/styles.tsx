import styled from "styled-components";

import StyledLayout from "../Layout/styles";

import { ElementProps } from "./types";

const StyledColumn = styled(StyledLayout)<ElementProps>`${ ({ theme, $justifyContent, $alignItems, $width }) => `
  flex-direction: column;
` }`;

export default StyledColumn;
