import styled from "styled-components";

import { utilityFunctions } from "../../utilities";

import { ElementProps } from "./types";

const StyledChip = styled.div<ElementProps>`

  display: flex;
  align-items: center;

  background-color: ${ ({ theme }) => theme.color.transparent };

  color: ${ ({ theme }) => theme.color.black };

  border: ${ ({ theme, $color }) => `1px solid ${ theme.color[$color].default }` };

  cursor: ${ ({ $clickable }) => $clickable ? "pointer" : "default" };

  border-radius: 4px;
  width: fit-content;
  height: 24px;
  white-space: nowrap;

  font-family: ${ ({ theme }) => theme.font.family.default };
  font-weight: ${ ({ theme }) => theme.font.weight.medium };
  font-size: ${ ({ theme }) => theme.font.size.body };

  ${ ({ ...spacingProps }) => utilityFunctions.createSpacing(spacingProps) }
`;

export default StyledChip;
