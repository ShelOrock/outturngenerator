import React from 'react';

import { ButtonOnClickType, ButtonProps, GenericComponentProps, InputOnChangeType, ModalTypes } from '../../types';

import { ModalContainers } from '../Containers';
import { InputModuleMolecules } from '../Molecules';
import {
  Type,
  Button } from '../Atoms';
import InputModule from '../Molecules/InputModule';
import { ModalStateType } from '../../types/Interfaces/modal';

interface ComponentProps extends GenericComponentProps {
  open: boolean;
  heading: string;
  primaryAction: ButtonProps;
  secondaryAction: ButtonProps;
};

const Modal: React.FC<ComponentProps> = ({
  open = false,
  heading = '',
  primaryAction = null,
  secondaryAction = null,
  children
}) => (
 open && <>
    <ModalContainers.Background />
    <ModalContainers.Main>
    <Type.Heading>{ heading }</Type.Heading>
      { children }
    <Button.Button
      variant={ 'primary' }
      onClick={ primaryAction.onClick }
    >{ primaryAction.text }</Button.Button>
    <Button.Button
      variant={ 'secondary' }
      onClick={ secondaryAction.onClick }
    >{ secondaryAction.text }</Button.Button>
  </ModalContainers.Main>
  </>
);

export default Modal
