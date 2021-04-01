import * as React from "react";
const { useState, useEffect } = React;
import { useDispatch } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useTypedSelector, generateOutturn } from "../../utils";

import CaskListItemContainer from "./CaskListItemContainer";
import ActiveCask from './ActiveCask';
import ButtonManager from "../Button/ButtonManager";
import * as StyledComponents from "../styledcomponents/index";
const {
  StyledDiv: { Column, Row },
  StyledCask: { List },
  StyledForm: { Checkbox },
} = StyledComponents;

import * as actions from "../../redux/actions";
const {
  markCaskActions: { markAllCasks, unmarkAllCasks, resetMarkedCasks },
} = actions;

import * as thunks from '../../redux/thunks';
const {
  casksThunks: { editManyCasks }
} = thunks;

import { createButton } from "../../buttonProps";

import { InputOnChangeType } from "../../types/index";

export default () => {
  const dispatch = useDispatch();

  const { activeOutturn, markedCasks } = useTypedSelector((state) => state);
  const { casks } = activeOutturn;
  const [ localCaskOrder, setLocalCaskOrder ] = useState(casks);
  const [ isEdited, setIsEdited ] = useState(false);

  useEffect(() => { dispatch(resetMarkedCasks()) }, []);
  useEffect(() => setLocalCaskOrder(casks ? casks.map((cask) => cask) : []), [casks]);
  useEffect(() => checkLocalStateHasChanged(casks, localCaskOrder), [casks, localCaskOrder])

  const handleAllCasksOnCheck: InputOnChangeType = () => {
    if (markedCasks.length === casks.length) dispatch(unmarkAllCasks());
    else dispatch(markAllCasks([...casks.map((cask) => cask.id)]));
  };

  const onDragEnd = result => {
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;

    const reorderCasks = (list, startIndex, endIndex) => {
      let listCopy = [...list]
      const element = list[startIndex];
      listCopy.splice(startIndex, 1);
      listCopy.splice(endIndex, 0, element);
      return listCopy;
    };

    const reorderedCasks = reorderCasks(
      localCaskOrder,
      result.source.index,
      result.destination.index
    );

    setLocalCaskOrder(reorderedCasks);
  };

  const checkLocalStateHasChanged = (previousCaskOrder, currentCaskOrder) => {
    setIsEdited(false);

    if(currentCaskOrder) {
      currentCaskOrder.forEach((_item, idx) => {
        if(previousCaskOrder[idx] !== currentCaskOrder[idx]) setIsEdited(true);
      })
    }
  }

  const checkAllCasksCheckboxProps = {
    type: 'checkbox',
    checked: casks && casks.length && casks.length == markedCasks.length || false,
    onChange: handleAllCasksOnCheck
  }

  const editManyCasksButtonProps = {
    variant: 'primary',
    disabled: !isEdited,
    dispatchToStore: true,
    onClickFunctionProps: createButton(editManyCasks, "Save", activeOutturn.id, localCaskOrder)
  }

  const cancelChangesButtonProps = {
    variant: 'secondary',
    disabled: !isEdited,
    dispatchToStore: false,
    onClickFunctionProps: createButton(setLocalCaskOrder, 'Cancel', casks)
  }

  const generateOutturnButtonProps = { 
    variant: 'primary',
    dispatchToStore: false,
    onClickFunctionProps: createButton(generateOutturn(activeOutturn), "Generate Outturn") 
  }

  return (
    <Column justifyContent='center'>
      <Row alignItems='center'>
        <Checkbox { ...checkAllCasksCheckboxProps } />
        <ButtonManager { ...editManyCasksButtonProps } />
        <ButtonManager { ...cancelChangesButtonProps } />
      </Row>
      <Row>
        <List>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="list">
              {provided => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {localCaskOrder
                    ? localCaskOrder.map((cask, idx) => <CaskListItemContainer key={cask.id} index={idx} cask={cask} />)
                    : null}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <ButtonManager { ...generateOutturnButtonProps } />
        </List>
        <ActiveCask />
      </Row>
    </Column>
  );
};
