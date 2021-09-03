import React from 'react';

import { GenericComponentProps, InputOnChangeType } from '../../../types';

import { StyledInput } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: InputOnChangeType;
};

const InputField: React.FC<ComponentProps> = ({
  type,
  name,
  value,
  placeholder = '',
  onChange,
}) => (
  <StyledInput.InputField
    type={ type }
    name={ name }
    value={ value }
    placeholder={ placeholder }
    onChange={ () => onChange() }
  />
);

export default InputField;
