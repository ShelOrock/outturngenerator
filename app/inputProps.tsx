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