import styled from "styled-components";

import { utilityFunctions } from "../../../utilities";

import { ElementProps } from "./types";

const StyledLayout = styled.div<ElementProps>`

  display: flex;
  justify-content: ${ ({ $justifyContent }) => $justifyContent };
  align-items: ${ ({ $alignItems }) => $alignItems };
  width: ${ ({ theme, $width }) => theme.componentSize.layout[$width] };
  // position: ${ ({ $position }) => $position };
  // top: ${ ({ $top }) => $top };
  // right: ${ ({ $right }) => $right };
  // bottom: ${ ({ $bottom }) => $bottom };
  // left: ${ ({ $left }) => $left };
  // height: ${ ({ theme, $height }) => theme.componentSize.layout[$height] };
  // max-width: ${ ({ theme, $maxWidth }) => theme.componentSize.layout[$maxWidth] };
  max-height: ${ ({ theme, $maxHeight }) => theme.componentSize.layout[$maxHeight] };
  flex-wrap: ${ ({ $wrap }) => $wrap };
  // flex: ${ ({ $size }) => $size };
  // overflow: ${ ({ $overflow }) => $overflow };

  ${ ({ ...spacingProps }) => utilityFunctions.createSpacing(spacingProps) };
`;

export default StyledLayout;
