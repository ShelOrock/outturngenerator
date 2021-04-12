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

  const buttonProps = {
    size: size || 'default',
    disabled: disabled || !!isLoading || false,
    variant: disabled ? 'disabled' : variant || 'default',
    onClick: dispatchToStore
      ? () => dispatch(onClickFunctionProps.onClickFunction(...onClickFunctionProps.arguments))
      : () => onClickFunctionProps.onClickFunction(...onClickFunctionProps.arguments)
  }

  console.log({ dispatchToStore, buttonProps})

  return (
    onClickFunctionProps.onClickFunction && (
      <Button { ...buttonProps }>
        { onClickFunctionProps.text }
      </Button>
    )
  );
};
