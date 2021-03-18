import { capitalizeString, convertFromCamelCaseToSentenceCase } from "./utils";

export const editCaskInputProps = (handleOnChange, state): any[] =>
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

export const editCaskHeaderInputProps = (onChangeFunction, state) => [
  [
    {
      label: "Cask Number",
      type: "text",
      name: "caskNumber",
      size: "large",
      value: state.caskNumber,
      onChangeFunction,
    },
    {
      label: "Name",
      type: "text",
      name: "name",
      size: "large",
      value: state.name,
      onChangeFunction,
    },
  ],
  {
    label: "Price",
    type: "text",
    name: "price",
    size: "small",
    value: state.price,
    onChangeFunction,
  },
];

export const editCaskBodyInputProps = (onChangeFunction, state) => [
  [
    {
      label: "Age",
      type: "text",
      name: "age",
      size: "large",
      value: state.age,
      onChangeFunction,
    },
    {
      label: "Date",
      type: "text",
      name: "date",
      size: "large",
      value: state.date,
      onChangeFunction,
    },
  ],
  {
    label: "Region",
    type: "text",
    name: "region",
    size: "medium",
    value: state.region,
    onChangeFunction,
  },
  {
    label: "Cask Type",
    type: "text",
    name: "caskType",
    size: "medium",
    value: state.caskType,
    onChangeFunction,
  },
  [
    {
      label: "Outturn",
      type: "text",
      name: "bottleOutturn",
      size: "small",
      value: state.bottleOutturn,
      onChangeFunction,
    },
    {
      label: "allocation",
      type: "text",
      name: "date",
      size: "small",
      value: state.allocation,
      onChangeFunction,
    },
  ],
  {
    label: "Tasting Note",
    type: "text",
    name: "description",
    size: "medium",
    value: state.description,
    onChangeFunction,
  },
];
