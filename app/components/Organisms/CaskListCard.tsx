import React from 'react';

import {
  GenericComponentProps,
  AppDispatch,
  ActionFunctionType,
  ThunkFunctionType,
  InputOnChangeType,
  Cask,
  User,
} from '../../types';

import { CaskListItemContainers } from '../Containers';
import { CaskListItemMolecules } from '../Molecules';
import { Button } from '../Atoms';

interface ComponentProps extends GenericComponentProps {
  cask: Cask;
  markedCasks: String[];
  handleMarkCask: InputOnChangeType;
  handleSetModal: ActionFunctionType;
  getActiveCask: ThunkFunctionType;
  dispatch: AppDispatch
  user: User;
};

const CaskListCard: React.FC<ComponentProps> = ({
  cask = {} as Cask,
  markedCasks = [],
  handleMarkCask,
  handleSetModal,
  getActiveCask,
  dispatch,
  user = {} as User,
}) => (
  <CaskListItemContainers.Main>
    <CaskListItemMolecules.Toolbar
      userType={ user.userType }
      caskId={ cask.id }
      markedCasks={ markedCasks }
      handleMarkCask={ handleMarkCask }
      handleSetModal={ handleSetModal }
      dispatch={ dispatch }
    />
    <Button.Button
      variant={ 'tertiary' }
      dispatch={ dispatch }
      onClick={ getActiveCask }
    >
      <CaskListItemMolecules.Header
        caskNumber={ cask.caskNumber }
        name={ cask.name }
      />
      <CaskListItemMolecules.Body
        flavourProfile={ cask.flavourProfile }
      />
    </Button.Button>
  </CaskListItemContainers.Main>
);

export default CaskListCard;