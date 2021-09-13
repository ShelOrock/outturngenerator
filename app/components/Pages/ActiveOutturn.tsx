import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DropResult } from 'react-beautiful-dnd';
import { useTypedSelector } from '../../utils';

import ActiveOutturnTemplate from '../Templates/ActiveOutturn';
import { CaskListMolecules } from '../Molecules';
import { CaskList } from '../Organisms';
import { ActiveCask } from '../Organisms';

import { markCaskActions, modalActions } from '../../redux/actions';
import { activeCaskThunks, allCasksThunks } from '../../redux/thunks';

import {
  GenericComponentProps,
  InputOnChangeType,
  ButtonOnClickType,
  Cask,
} from '../../types';

interface ComponentProps extends GenericComponentProps {};

const ActiveOutturn: React.FC<ComponentProps> = () => {

  const dispatch = useDispatch();

  const {
    allCasks,
    activeCask,
    markedCasks,
    activeOutturn,
    activeUser,
  } = useTypedSelector(state => state);

  const [ localCaskOrder, setLocalCaskOrder ] = useState(allCasks);
  const [ isEdited, setIsEdited ] = useState(false);

  useEffect(() => {
    dispatch(markCaskActions.resetMarkedCasks())
  }, []);
  useEffect(() => {
    setLocalCaskOrder(allCasks.length ? allCasks : [])
  }, [allCasks]);
  useEffect(() => {
    checkLocalCaskOrder(allCasks, localCaskOrder)
  }, [allCasks, localCaskOrder]);

  const checkLocalCaskOrder = (previousOrder: Cask[], currentOrder: Cask[]): void => {
    setIsEdited(false);
    currentOrder.forEach((_item, idx) => {
      if(previousOrder[idx] !== currentOrder[idx]) {
        setIsEdited(true);
      };
    });
  };

  const handleMarkCask: InputOnChangeType = e => {
    if(markedCasks.includes(e.target.name)) {
      dispatch(markCaskActions.unmarkCask(e.target.name));
      return;
    };
    dispatch(markCaskActions.markCask(e.target.name));
  };

  const handleMarkAllCasks: InputOnChangeType = () => {
    if(markedCasks.length === allCasks.length) {
      dispatch(markCaskActions.unmarkAllCasks());
      return;
    };
    dispatch(markCaskActions.markAllCasks(allCasks.map(cask => cask.id)));
  };

  const handleDeleteCask: ButtonOnClickType = () => {};

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
      localCaskOrder,
      source.index,
      destination.index
    );

    setLocalCaskOrder(reorderedCasks)
  };

  const generateOutturn: ButtonOnClickType = () => {};

  return (
    <ActiveOutturnTemplate
      toolbar={
        <CaskListMolecules.Toolbar
          casks={ allCasks }
          markedCasks={ markedCasks }
          outturnId={ activeOutturn.id }
          isEdited={ isEdited }
          userType={ activeUser.userType }
          handleMarkAllCasks={ handleMarkAllCasks }
          handleSaveCasks={ allCasksThunks.editManyCasks }
          dispatch={ dispatch }
        />
      }
      sidebar={ <>
        <CaskList
          markedCasks={ markedCasks }
          user={ activeUser }
          localCaskOrder={ localCaskOrder }
          handleMarkCask={ handleMarkCask }
          handleSaveCasks={ allCasksThunks.editManyCasks }
          handleSetModal={ modalActions.setModal }
          getActiveCask={ activeCaskThunks.getActiveCask }
          onDragEnd={ onDragEnd }
          dispatch={ dispatch }
        />
        <CaskListMolecules.Buttons
          onClick={ generateOutturn }
        />
      </> }
      activeContent={ <ActiveCask
        cask={ activeCask }
        userType={ activeUser.userType }
        deleteCask={ handleDeleteCask }
        dispatch={ dispatch }
      /> }
    />
  );
};

export default ActiveOutturn;
