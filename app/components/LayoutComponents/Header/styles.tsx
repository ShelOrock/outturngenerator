import styled from "styled-components";

import StyledLayout from "../Layout/styles";

import { ElementProps } from "./types";

const StyledHeader = styled(StyledLayout)<ElementProps>`${ ({ theme, $justifyContent, $alignItems, $width }) => `
  flex-direction: row;
  background-color: ${ theme.color.neutral.default };
  border-radius: 8px 8px 0 0;
  position: sticky;
  top: 0;
` }`;

export default StyledHeader;
