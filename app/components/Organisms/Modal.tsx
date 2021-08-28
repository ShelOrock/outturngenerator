import React from 'react';

import { GenericComponentProps, Modal } from '../../types';

import { ModalContainers } from '../Containers';
import { InputModule } from '../Molecules';
import { Type, Button } from '../Atoms';

interface ComponentProps extends GenericComponentProps {
  modal: Modal;
};

export default ({ modal }: ComponentProps): JSX.Element => (
  <ModalContainers.Modal>
    <ModalContainers.Background />
    <Type.Heading> { modal.modalHeader }</Type.Heading>
    <ModalContainers.InputModules>
      {/*TODO*/}
    </ModalContainers.InputModules>
    <ModalContainers.Buttons>
      {/*TODO*/}
    </ModalContainers.Buttons>
  </ModalContainers.Modal>
);
