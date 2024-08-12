import styled from "styled-components";

import Layout from "../Layout";

import { ElementProps } from "./types";

const StyledRow = styled(Layout)<ElementProps>`${ ({ theme, $justifyContent, $alignItems, $width }) => `
  flex-direction: row;

  justify-content: ${ $justifyContent };
  align-items: ${ $alignItems };
  width: ${ theme.componentSize.layout[$width] };
` }`;

export default StyledRow;
