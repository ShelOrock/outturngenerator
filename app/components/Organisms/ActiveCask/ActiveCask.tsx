import React from 'react';

import { ActiveCaskContainers } from '../../Containers';
import ActiveCaskBody from './ActiveCaskBody';
import { ActiveCaskMolecules } from '../../Molecules';

import { GenericComponentProps, Cask } from '../../../types';

interface ComponentProps extends GenericComponentProps {
  userType: 
  | 'Admin' 
  | 'Standard' 
  | 'Unconfirmed' 
  | 'Guest',
  cask: Cask,
  deleteCask;
};

const ActiveCask: React.FC<ComponentProps> = ({
  userType = 'Guest',
  cask = {} as Cask,
  deleteCask,
}) => (
  <ActiveCaskContainers.Main>
    <ActiveCaskMolecules.Toolbar
      userType={ userType }
      caskId={ cask.id }
      onClick={ deleteCask }
    />
    <ActiveCaskMolecules.Header
      number={ cask.caskNumber }
      name={ cask.name }
      price={ cask.price }
    />
    <ActiveCaskBody
      cask={ cask }
    />
  </ActiveCaskContainers.Main>
);

export default ActiveCask;
