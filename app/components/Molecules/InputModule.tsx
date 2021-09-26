import React from 'react';

import { GenericComponentProps, InputOnChangeType } from '../../types';

import { InputModuleContainers } from '../Containers';
import { Input } from '../Atoms';

interface ComponentProps extends GenericComponentProps {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: InputOnChangeType;
  error: string;
};

const InputModule: React.FC<ComponentProps> = ({
  type,
  name,
  value,
  placeholder = '',
  onChange,
  error = ''
}) => (
  <InputModuleContainers.Main>
    <InputModuleContainers.Information>
      <Input.Label>{ name }</Input.Label>
      <Input.Feedback>{ error }</Input.Feedback>
    </InputModuleContainers.Information>
    <Input.InputField
      type={ type }
      name={ name }
      value={ value }
      placeholder={ placeholder }
      onChange={ onChange } 
    />
  </InputModuleContainers.Main>
);

export default InputModule;
