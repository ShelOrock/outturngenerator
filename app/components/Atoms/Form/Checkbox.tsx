import React from 'react';

import { GenericComponentProps, InputOnChangeType } from '../../../types';

import { StyledForm } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {
  type: 'checkbox';
  name: string;
  checked: boolean;
  onChange: InputOnChangeType;
}

export default ({
  type = 'checkbox',
  name,
  checked,
  onChange,
  children
}: ComponentProps): JSX.Element => (
  <StyledForm.Checkbox
    type={ type }
    name={ name }
    checked={ checked }
    onChange={ () => onChange() }
  >{ children }</StyledForm.Checkbox>
);
