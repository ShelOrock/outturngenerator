import React from 'react';

import { GenericComponentProps, ModalTypes } from '../../types';

import { ModalContainers } from '../Containers';
import { InputModuleMolecules } from '../Molecules';
import {
  Type,
  Button } from '../Atoms';
import InputModule from '../Molecules/InputModule';

interface ComponentProps extends GenericComponentProps {
  modal?: ModalTypes;
};

const Modal: React.FC<ComponentProps> = ({ modal }) => (
 <>
    <ModalContainers.Background />
    <ModalContainers.Main>
    <Type.Heading>{ modal.heading }</Type.Heading>
    <ModalContainers.InputModules>
      {
        Object.keys(modal.state).map(input => (
          <InputModule
            key={ input }
            type={ 'text' }
            name={ input }
            value={ modal.state[input] }
            placeholder={ input }
            onChange={ () => {} }
          />
        ))
      }
    </ModalContainers.InputModules>
    <Button.Button
      variant={ 'primary' }
      { ...modal.primaryAction }
    />
    <Button.Button
      variant={ 'secondary' }
      { ...modal.secondaryAction }
    />
  </ModalContainers.Main>
  </>
);

export default Modal
