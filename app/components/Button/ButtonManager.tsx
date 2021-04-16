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
  onClickFunctionProps,
  dispatchToStore = true,
}: ButtonProps) => {

  const dispatch = useDispatch();
  const { isLoading } = useTypedSelector((state) => state);

  const buttonProps: ButtonProps = {
    size: size || 'default',
    disabled: disabled || !!isLoading || false,
    variant: disabled ? 'disabled' : variant || 'default',
    onClickFunctionProps: dispatchToStore
      ? () => dispatch(onClickFunctionProps.onClickFunction(...onClickFunctionProps.arguments))
      : () => onClickFunctionProps.onClickFunction(...onClickFunctionProps.arguments)
  }

  return (
    onClickFunctionProps.onClickFunction && (
      <Button { ...buttonProps }>
        { onClickFunctionProps.text }
      </Button>
    )
  );
};
