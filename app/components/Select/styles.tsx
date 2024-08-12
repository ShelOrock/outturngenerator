import styled from "styled-components"

import { utilityFunctions } from "../../utilities";

import { PropsWithSpacing } from "../../types";

interface ElementProps extends PropsWithSpacing {
  $width: string;
};

const StyledSelect = styled.select<ElementProps>`
  padding: 8px 16px;
  border: none;
  border-radius: 16px;
  background-color: ${ ({ theme }) => theme.color.neutral.default };
  width: ${ ({ theme, $width }) => theme.componentSize.input[$width] };

  &:focus {
    outline: 2px solid ${ ({ theme }) => theme.color.primary.default };
  }

  ${ ({ ...spacingProps }) => utilityFunctions.createSpacing(spacingProps) };
`;

export default StyledSelect;
