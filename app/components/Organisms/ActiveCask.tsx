import React from 'react';

import { ActiveCaskContainers } from '../Containers';
import ActiveCaskBody from './ActiveCaskBody';
import { ActiveCaskMolecules } from '../Molecules';

import {
  GenericComponentProps,
  ButtonOnClickType,
  AppDispatch,
  Cask, 
} from '../../types';

interface ComponentProps extends GenericComponentProps {
  userType: 
  | 'Admin' 
  | 'Standard' 
  | 'Unconfirmed' 
  | 'Guest',
  cask: Cask,
  onClick: ButtonOnClickType;
  dispatch: AppDispatch
};

const ActiveCask: React.FC<ComponentProps> = ({
  userType = 'Guest',
  cask = {} as Cask,
  onClick,
  dispatch
}) => (
  <ActiveCaskContainers.Main>
    <ActiveCaskMolecules.Toolbar
      userType={ userType }
      caskId={ cask.id }
      onClick={ onClick }
      dispatch={ dispatch }
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
