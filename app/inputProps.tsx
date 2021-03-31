import { capitalizeString, convertFromCamelCaseToSentenceCase } from "./utils";

export const genericInputProps = (handleOnChange, state): any[] =>
  Object.keys(state).map((stateSlice) => ({
    label: capitalizeString(convertFromCamelCaseToSentenceCase(stateSlice)),
    type: "text",
    name: `${stateSlice}`,
    value: state[stateSlice],
    onChangeFunction: handleOnChange,
  }));

export const loginInputProps = (onChangeFunction, state) => [
  {
    label: "Username or Email",
    type: "text",
    name: "usernameOrEmail",
    size: "large",
    value: state.caskNumber,
    onChangeFunction,
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    size: "large",
    value: state.caskNumber,
    onChangeFunction,
  },
];