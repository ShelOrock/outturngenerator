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
      size: 'large',
      value: state.caskNumber,
      onChangeFunction
    },
    {
      label: 'Name',
      type: 'text',
      name: 'name',
      size: 'large',
      value: state.name,
      onChangeFunction,
    },
  ],
  {
    label: 'Price',
    type: 'text',
    name: 'price',
    size: 'small',
    value: state.price,
    onChangeFunction
  }
]);