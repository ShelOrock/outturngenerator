// //Dependency Libraries
// import * as React from "react";
// //Dependency Functions
// import { useTypedSelector } from "../../utils";

// //StyledComponents
// import * as StyledComponents from "../styledcomponents/index";
// const { StyledButton: { Button } } = StyledComponents;

// //Types
// import { ButtonProps } from "../../types/index";

// export default ({
//   size,
//   variant,
//   disabled,
//   onClick,
//   dispatch,
// }: ButtonProps) => {

//   const { isLoading } = useTypedSelector((state) => state);

//   const buttonProps: ButtonProps = {
//     size: size || 'default',
//     disabled: disabled || !!isLoading || false,
//     variant: disabled ? 'disabled' : variant || 'default',
//     onClick: dispatch
//       ? () => dispatch(onClick.onClickFunction(...onClick.arguments))
//       : () => onClick.onClickFunction(...onClick.arguments)
//   }
  
//   return onClick.onClickFunction && <Button { ...buttonProps }>{ onClick.text }</Button>;
// };
