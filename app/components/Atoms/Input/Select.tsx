import React from 'react';

import { GenericComponentProps, InputOnChangeType } from '../../../types';

import { StyledInput } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {
  disabled: boolean;
  value: string;
  onChange: InputOnChangeType;
};

const Select: React.FC<ComponentProps> = ({
  disabled = false,
  value,
  onChange,
  children
}) => (
  <StyledInput.Select
    disabled={ disabled }
    value={ value }
    onChange={ () => onChange() }
  >{ children }</StyledInput.Select>
);

export default Select;
