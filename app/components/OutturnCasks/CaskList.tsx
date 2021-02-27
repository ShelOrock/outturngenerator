import * as React from "react";
const { useState, useEffect } = React;
import { useDispatch } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useTypedSelector, generateOutturn } from "../../utils";

import CaskListItem from "./CaskListItem";
import ButtonManager from "../Button/ButtonManager";
import * as StyledComponents from "../styledcomponents/index";
const {
  StyledCask: { CaskList },
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
  const [localCaskOrder, setLocalCaskOrder] = useState(casks);

  useEffect(() => {
    dispatch(resetMarkedCasks());
  }, []);

  useEffect(() => setLocalCaskOrder(casks ? casks.map((cask) => cask) : []), [
    casks,
  ]);

  const handleAllCasksOnCheck: InputOnChangeType = () => {
    if (markedCasks.length === casks.length) dispatch(unmarkAllCasks());
    else dispatch(markAllCasks([...casks.map((cask) => cask.id)]));
  };

  const onDragEnd = result => {
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;

    const reorderCasks = (list, startIndex, endIndex) => {
      const element = list[startIndex];
      list.splice(startIndex, 1);
      list.splice(endIndex, 0, element);

      return list;
    };

    const reorderedCasks = reorderCasks(
      localCaskOrder,
      result.source.index,
      result.destination.index
    );

    console.log({reorderedCasks})
    setLocalCaskOrder(reorderedCasks);
  };

  useEffect(() => console.log({ localCaskOrder }), [localCaskOrder]);

  return (
    <CaskList>
      <Checkbox
        type="checkbox"
        checked={casks && casks.length && casks.length === markedCasks.length}
        onChange={handleAllCasksOnCheck}
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {localCaskOrder
                ? localCaskOrder.map((cask, idx) => <CaskListItem key={cask.id} index={idx} cask={cask} />)
                : null}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <ButtonManager
        variant="primary"
        props={ createButton(editManyCasks, "Save", activeOutturn.id, localCaskOrder) }
      />
      <ButtonManager
        variant="primary"
        props={ createButton(generateOutturn(activeOutturn), "Generate Outturn") }
      />
    </CaskList>
  );
};
