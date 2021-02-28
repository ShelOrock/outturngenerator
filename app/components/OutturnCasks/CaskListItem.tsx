import * as React from "react";
import { useDispatch } from "react-redux";
import { Draggable } from "react-beautiful-dnd";
import { useTypedSelector, assignColorPill } from "../../utils";

import ButtonManager from "../Button/ButtonManager";
import * as StyledComponents from "../styledcomponents/index";
const {
  StyledType: { Subheader, Body },
  StyledDiv: { Row, Column },
  StyledCask: { CaskListItemDiv, CaskListItemButton, CaskListItemFlavourPill },
  StyledForm: { Checkbox },
} = StyledComponents;

import * as actions from "../../redux/actions";
const {
  markCaskActions: { markCask, unmarkCask },
} = actions;

import * as thunks from "../../redux/thunks";
const {
  activeCaskThunks: { getActiveCask },
} = thunks;

import { createModalButton } from "../../buttonProps";
import { deleteCaskModal } from "../../modalProps";

import { InputOnChangeType } from "../../types/index";

export default ({ cask, index, innerRef, sortMethod }: any) => {
  const dispatch = useDispatch();

  const { markedCasks, activeOutturn, activeCask } = useTypedSelector(
    (state) => state
  );

  const handleOnCheck: InputOnChangeType = (e) => {
    if (markedCasks.includes(e.target.name))
      dispatch(unmarkCask(e.target.name));
    else dispatch(markCask(e.target.name));
  };

  return (
    <Draggable draggableId={ cask.id } index={ index }>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CaskListItemDiv
            flavourProfile={assignColorPill(cask.flavourProfile)}
            ref={innerRef}
          >
            <Column>
              <Row alignItems="center" justifyContent="space-between">
                <Checkbox
                  type="checkbox"
                  name={cask.id}
                  checked={markedCasks.includes(cask.id)}
                  onChange={handleOnCheck}
                />
                <ButtonManager
                  size="small"
                  variant="tertiary"
                  props={createModalButton(
                    "X",
                    deleteCaskModal(
                      activeCask,
                      cask,
                      activeOutturn.id,
                      sortMethod
                    )
                  )}
                />
              </Row>
              <Row>
                <CaskListItemFlavourPill
                  flavourProfile={assignColorPill(cask.flavourProfile)}
                />
                <CaskListItemButton
                  flavourProfile={assignColorPill(cask.flavourProfile)}
                  onClick={() => dispatch(getActiveCask(cask.id))}
                >
                  <Column>
                    <Subheader>
                      {cask.caskNumber ? `Cask No. ${cask.caskNumber}` : "Untitled Cask"}
                    </Subheader>
                    <Body>{cask.name}</Body>
                  </Column>
                </CaskListItemButton>
              </Row>
            </Column>
          </CaskListItemDiv>
        </div>
      )}
    </Draggable>
  );
};
