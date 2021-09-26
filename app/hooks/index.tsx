import { useState, useEffect } from 'react';

import { DropResult } from 'react-beautiful-dnd';
import { Cask } from '../types';

interface useReorderCasksReturnType {
  currentCaskOrder: Cask[];
  isEdited: boolean;
  onDragEnd: (DropResult) => void;
};

const useReorderCasks = (casks: Cask[] = []): useReorderCasksReturnType => {

  const [ currentCaskOrder, setCurrentCaskOrder ] = useState(casks);
  const [ isEdited, setIsEdited ] = useState(false);

  const reorderCasks = (
    list: Cask[],
    startIndex: number,
    endIndex: number
  ): Cask[] => {
    let listCopy = [ ...list ];
    const element = list[startIndex];
    listCopy.splice(startIndex, 1);
    listCopy.splice(endIndex, 0 , element);
    return listCopy;
  };

  const onDragEnd = ({ destination, source }: DropResult): void => {
    if(!destination || destination.index === source.index) {
      return;
    };
    const reorderedCasks = reorderCasks(
      currentCaskOrder,
      source.index,
      destination.index
    );

    setCurrentCaskOrder(reorderedCasks)
  };

  useEffect(() => {
    setIsEdited(false);
    currentCaskOrder.forEach(item => {
      if(casks.indexOf(item) !== currentCaskOrder.indexOf(item)) {
        setIsEdited(true);
      };
    })
  }, [casks, currentCaskOrder]);

  return {
    currentCaskOrder,
    isEdited,
    onDragEnd
  }
};

export default useReorderCasks;