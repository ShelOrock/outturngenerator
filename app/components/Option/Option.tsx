import React from "react";

import { ComponentProps } from "./types";

const Options: React.FC<ComponentProps> = ({
  value,
  hidden = false,
  disabled = false,
  children
}) => (
  <option
    value={ value }
    hidden={ hidden }
    disabled={ disabled }
  >{ children }</option>
);

export default Options;
