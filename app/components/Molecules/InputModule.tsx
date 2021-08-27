import React from 'react';

import { GenericComponentProps, InputOnChangeType } from '../../types';

import { InputModuleContainers } from '../Containers';
import { Form } from '../Atoms';

interface ComponentProps extends GenericComponentProps {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: InputOnChangeType;
  validateField: any //TODO
  error: string;
};

export default ({
  type,
  name,
  value,
  placeholder = '',
  onChange,
  validateField = null, //TODO
  error = ''
}: ComponentProps): React.ReactNode => (
  <InputModuleContainers.InputModule>
    <InputModuleContainers.Information>
      <Form.Label>{ name }</Form.Label>
      <Form.Feedback>{ error }</Form.Feedback>
    </InputModuleContainers.Information>
    <Form.InputField
      type={ type }
      name={ name }
      value={ value }
      placeholder={ placeholder }
      onChange={ onChange } 
    />
  </InputModuleContainers.InputModule>
);
