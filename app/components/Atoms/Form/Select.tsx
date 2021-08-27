import React from 'react';

import { GenericComponentProps, InputOnChangeType } from '../../../types';

import { StyledForm } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {
  disabled: boolean;
  value: string;
  onChange: InputOnChangeType;
};

export default ({
  disabled = false,
  value,
  onChange,
  children
}: ComponentProps): React.ReactNode => (
  <StyledForm.Select
    disabled={ disabled }
    value={ value }
    onChange={ () => onChange() }
  >{ children }</StyledForm.Select>
);
