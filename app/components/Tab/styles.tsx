import styled from "styled-components";

import { ElementProps } from "./types";

const StyledTab = styled.div<ElementProps>`
  margin-right: 4px;
  width: 22px;
  height: 22px;
  border-radius: 4px 0 0 4px;

  background-color: ${ ({ theme, $color, $selected }) => {
    if($selected) {
      return theme.color[$color].default 
    };

    return theme.color.neutral.default;

  } };

  &:hover {
    background-color: ${ ({ theme, $color }) => theme.color[$color].hover };
  }
`;

export default StyledTab;
