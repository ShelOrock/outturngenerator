import { capitalizeString, convertFromCamelCaseToSentenceCase } from './utils';

export const editCaskInputProps = (handleOnChange, state): any[] => (
  Object.keys(state).map(stateSlice => (
    {
      label: capitalizeString(convertFromCamelCaseToSentenceCase(stateSlice)),
      type: 'text',
      name: `${ stateSlice }`,
      value: state[stateSlice],
      onChangeFunction: handleOnChange
    }
  ))
);

export const editCaskHeaderInputProps = (onChangeFunction, state) => ([
  [
    {
      label: 'Cask Number',
      type: 'text',
      name: 'caskNumber',
      value: state.caskNumber,
      onChangeFunction
    },
    {
      label: 'Name',
      type: 'text',
      name: 'name',
      value: state.name,
      onChangeFunction,
    },
  ],
  {
    label: 'Price',
    type: 'text',
    name: 'price',
    value: state.value,
    onChangeFunction
  }
]);