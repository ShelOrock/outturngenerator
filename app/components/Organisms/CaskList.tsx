import React from 'react';
import { DropResult } from 'react-beautiful-dnd';

import { CaskListContainers } from '../Containers';
import { List, DragAndDrop } from '../Atoms';

import {
  GenericComponentProps,
  AppDispatch,
  Cask,
  User,
  InputOnChangeType,
} from '../../types';
import CaskListItem from './CaskListItem';

interface ComponentProps extends GenericComponentProps {
  markedCasks: string[];
  user: User
  dispatch: AppDispatch
  localCaskOrder: Cask[];
  onCheck: InputOnChangeType
  onDragEnd: (DropResult) => void;
};

const CaskList: React.FC<ComponentProps> = ({
  markedCasks = [],
  user = {} as User,
  dispatch,
  localCaskOrder,
  onCheck,
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
              <CaskListItem
                key={ cask.id }
                cask={ cask }
                markedCasks={ markedCasks }
                onCheck={ onCheck }
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
