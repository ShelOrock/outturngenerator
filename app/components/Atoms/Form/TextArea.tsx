import React from 'react';

import { GenericComponentProps, InputOnChangeType } from '../../../types';

import { StyledForm } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {
  name: string;
  value: string;
  onChange: InputOnChangeType;
};

export default ({
  name,
  value,
  onChange
}: ComponentProps): React.ReactNode => (
  <StyledForm.TextArea
    name={ name }
    value={ value }
    onChange={ onChange }
  />
);
