import * as React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../utils";

import * as StyledComponents from "../styledcomponents/index";
const {
  StyledButton: { Button },
} = StyledComponents;

import { ButtonProps } from "../../types/index";

export default ({
  size,
  variant,
  disabled,
  props,
  dispatchToStore = true,
}: ButtonProps) => {
  const dispatch = useDispatch();
  const { isLoading } = useTypedSelector((state) => state);

  return props ? (
    <Button
      size={size || "default"}
      disabled={disabled || !!isLoading || false}
      variant={disabled ? "disabled" : variant || "default"}
      onClick={
        dispatchToStore
          ? () => dispatch(props.onClickFunction(...props.arguments))
          : () => props.onClickFunction(...props.arguments)
      }
    >
      {props.text}
    </Button>
  ) : null;
};
