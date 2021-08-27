import React from 'react';

import { GenericComponentProps, InputOnChangeType } from '../../../types';

import { StyledForm } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: InputOnChangeType;
};

export default ({
  type,
  name,
  value,
  placeholder = '',
  onChange,
}: ComponentProps): JSX.Element => (
  <StyledForm.InputField
    type={ type }
    name={ name }
    value={ value }
    placeholder={ placeholder }
    onChange={ () => onChange() }
  />
);
