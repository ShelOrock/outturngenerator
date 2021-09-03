import React from 'react';
import { useDispatch } from 'react-redux';

import {
  GenericComponentProps,
  InputOnChangeType,
  AppDispatch,
  Cask,
  User,
} from '../../types';

import { CaskListItemContainers } from '../Containers';
import { CaskListItemMolecules } from '../Molecules';
import { Button } from '../Atoms';

import { activeCaskThunks } from '../../redux/thunks';

interface ComponentProps extends GenericComponentProps {
  cask: Cask;
  markedCasks: String[];
  onCheck: InputOnChangeType;
  dispatch: AppDispatch
  user: User;
};

export default ({
  cask = {} as Cask,
  markedCasks = [],
  onCheck,
  dispatch,
  user = {} as User,
}: ComponentProps): JSX.Element => (
  <CaskListItemContainers.Main>
    <CaskListItemMolecules.Toolbar
      userType={ user.userType }
      caskId={ cask.id }
      markedCasks={ markedCasks }
      onCheck={ onCheck }
      dispatch={ dispatch }
    />
    <Button.DispatchButton
      variant={ 'tertiary' }
      dispatch={ dispatch }
      onClick={ () => activeCaskThunks.getActiveCask(cask.id) }
    >
      <CaskListItemMolecules.Header
        caskNumber={ cask.caskNumber }
        name={ cask.name }
      />
      <CaskListItemMolecules.Body
        flavourProfile={ cask.flavourProfile }
      />
    </Button.DispatchButton>
  </CaskListItemContainers.Main>
);
