import React from 'react';

import { GenericComponentProps, InputOnChangeType } from '../../../types';

import { StyledForm } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {
  name: string;
  value: string;
  onChange: InputOnChangeType;
};

const TextArea: React.FC<ComponentProps> = ({
  name,
  value,
  onChange
}) => (
  <StyledForm.TextArea
    name={ name }
    value={ value }
    onChange={ onChange }
  />
);

export default TextArea;
