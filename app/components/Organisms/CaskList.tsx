import React from 'react';
import { DropResult } from 'react-beautiful-dnd';

import CaskListCard from './CaskListCard';
import { CaskListContainers } from '../Containers';
import { List, DragAndDrop } from '../Atoms';

import {
  GenericComponentProps,
  AppDispatch,
  ActionFunctionType,
  ThunkFunctionType,
  InputOnChangeType,
  Cask,
  User,
} from '../../types';

interface ComponentProps extends GenericComponentProps {
  markedCasks: string[];
  user: User
  dispatch: AppDispatch
  localCaskOrder: Cask[];
  getActiveCask: ThunkFunctionType;
  handleMarkCask: InputOnChangeType
  handleSaveCasks: ThunkFunctionType;
  handleSetModal: ActionFunctionType;
  onDragEnd: (DropResult) => void;
};

const CaskList: React.FC<ComponentProps> = ({
  markedCasks = [],
  user = {} as User,
  dispatch,
  localCaskOrder,
  getActiveCask,
  handleMarkCask,
  handleSetModal,
  onDragEnd,
}) => (
  <CaskListContainers.Main>
    <List.LineList>
      <DragAndDrop.DragAndDrop onDragEnd={ onDragEnd }>
        <DragAndDrop.Drop>
          { localCaskOrder.map((cask, idx) => {
            <DragAndDrop.Drag
              caskId={ cask.id }
              index={ idx }
            >
              <CaskListCard
                key={ cask.id }
                cask={ cask }
                markedCasks={ markedCasks }
                handleMarkCask={ handleMarkCask }
                handleSetModal={ handleSetModal }
                getActiveCask={ getActiveCask }
                dispatch={ dispatch }
                user={ user }
              />
            </DragAndDrop.Drag>
          }) }
        </DragAndDrop.Drop>
      </DragAndDrop.DragAndDrop>
    </List.LineList>
  </CaskListContainers.Main>
);

export default CaskList;
