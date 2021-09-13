import React from 'react';

import { CaskListContainers } from '../../Containers';
import { Button } from '../../Atoms';

import { ButtonOnClickType, GenericComponentProps } from '../../../types';

interface ComponentProps extends GenericComponentProps {
  onClick: ButtonOnClickType
};

const Buttons: React.FC<ComponentProps> = ({
  onClick
}) => (
  <CaskListContainers.Buttons>
    <Button.Button
      variant='primary'
      onClick={ e => onClick(e) /*TODO*/ }
    >Generate Outturn</Button.Button>
  </CaskListContainers.Buttons>
);

export default Buttons;
