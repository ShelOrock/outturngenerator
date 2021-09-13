import React from 'react';

import { GenericComponentProps, InputOnChangeType } from '../../../types';

import { StyledInput } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {
  type: 'checkbox';
  name: string;
  checked: boolean;
  onChange: InputOnChangeType;
}

const Checkbox: React.FC<ComponentProps> = ({
  type = 'checkbox',
  name,
  checked,
  onChange,
  children
}) => (
  <StyledInput.Checkbox
    type={ type }
    name={ name }
    checked={ checked }
    onChange={ () => onChange() }
  >{ children }</StyledInput.Checkbox>
);

export default Checkbox;
