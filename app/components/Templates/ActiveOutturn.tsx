import React from 'react';
import { DropResult } from 'react-beautiful-dnd';

import { PageContainers } from '../Containers';
import { CaskList, ActiveCask } from '../Organisms';
import { CaskListMolecules } from '../Molecules';

import { AppDispatch, ButtonOnClickType, Cask, GenericComponentProps, InputOnChangeType, User } from '../../types';

interface ComponentProps extends GenericComponentProps {
  casks: Cask[];
  cask: Cask;
  localCaskOrder: Cask[];
  markedCasks: string[];
  outturnId: string;
  isEdited: boolean;
  user: User;
  onCheck: InputOnChangeType;
  onDragEnd: (DropResult) => void;
  onClick: ButtonOnClickType;
  dispatch: AppDispatch;
};

const ActiveOutturn: React.FC<ComponentProps> = ({
  casks = [],
  cask = {},
  localCaskOrder = [],
  markedCasks = [],
  outturnId,
  isEdited = false,
  user = {} as User,
  onCheck,
  onDragEnd,
  onClick,
  dispatch,
}) => (
  <PageContainers.Main>
    <CaskListMolecules.Toolbar
      casks={ casks }
      markedCasks={ markedCasks }
      outturnId={ outturnId }
      isEdited={ isEdited }
      userType={ user.userType }
      dispatch={ dispatch }
    />
    <CaskList
      markedCasks={ markedCasks }
      user={ user }
      localCaskOrder={ localCaskOrder }
      onCheck={ onCheck }
      onDragEnd={ onDragEnd }
      dispatch={ dispatch }
    />
    <CaskListMolecules.Buttons
      onClick={ onClick }
    />
    <ActiveCask
      cask={ cask }
      userType={ user.userType }
      onClick={ onClick }
      dispatch={ dispatch }
    />
  </PageContainers.Main>
);

export default ActiveOutturn;
