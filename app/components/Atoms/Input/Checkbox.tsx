import React from 'react';

import { GenericComponentProps, InputOnChangeType } from '../../../types';

import { StyledInput } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {
  name: string;
  checked: boolean;
  onChange: InputOnChangeType;
}

const Checkbox: React.FC<ComponentProps> = ({
  name,
  checked,
  onChange,
  children
}) => (
  <StyledInput.Checkbox
    type={ 'checkbox' }
    name={ name }
    checked={ checked }
    onChange={ () => onChange() }
  >{ children }</StyledInput.Checkbox>
);

export default Checkbox;
