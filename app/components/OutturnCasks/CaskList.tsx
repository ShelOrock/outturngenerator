//Dependency Libraries
import * as React from "react";
const { useState, useEffect } = React;
import { useDispatch } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
//Dependency Functions
import { useTypedSelector, createButton, generateOutturn } from "../../utils";

//Components
import CaskListItemContainer from "./CaskListItemContainer";
import ActiveCaskContainer from './ActiveCaskContainer';
// import ButtonManager from "../Button/ButtonManager";
//StyledComponents
import * as StyledComponents from "../styledcomponents/index";
const {
  StyledDiv: { Column, Row },
  StyledCask: { List },
  StyledForm: { Checkbox },
} = StyledComponents;

//Redux Actions
import * as actions from "../../redux/actions";
const { 
  markCaskActions: {
    markAllCasks,
    unmarkAllCasks,
    resetMarkedCasks
  },
  modalActions: { setModal }
} = actions;

//Redux Thunks
import * as thunks from '../../redux/thunks';
const { allCasksThunks: { editManyCasks } } = thunks;

//Types
import { ButtonProps, InputOnChangeType } from "../../types/index";

export default () => {
  const dispatch = useDispatch();

  const {
    activeOutturn,
    markedCasks,
    activeUser
  } = useTypedSelector((state) => state);
  const { casks } = activeOutturn;
  const [ localCaskOrder, setLocalCaskOrder ] = useState(casks);
  const [ isEdited, setIsEdited ] = useState(false);

  useEffect(() => { dispatch(resetMarkedCasks()) }, []);
  useEffect(() => setLocalCaskOrder(casks ? casks.map((cask) => cask) : []), [casks]);
  useEffect(() => checkLocalStateHasChanged(casks, localCaskOrder), [casks, localCaskOrder])

  const evaluateUserType = activeUser.userType == 'Admin' || activeUser.userType == 'Standard';

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

  const checkLocalStateHasChanged = (previousCaskOrder, currentCaskOrder): void => {
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

  const editManyCasksButtonProps: ButtonProps = {
    variant: 'primary',
    disabled: !isEdited,
    // dispatchToStore: true,
    // onClick: createButton(
    //   editManyCasks,
    //   "Save",
    //   activeOutturn.id,
    //   localCaskOrder
    // )
  }

  const cancelChangesButtonProps: ButtonProps = {
    variant: 'secondary',
    disabled: !isEdited,
    // dispatchToStore: false,
    // onClick: createButton(
    //   setLocalCaskOrder,
    //   'Cancel',
    //   casks
    // )
  }

  const generateOutturnModal = {
    modalHeader: `${ activeOutturn.name }`,
    modalState: {
      HTML: generateOutturn(activeOutturn)
    },
    confirmButton: {
      text: 'Copy to clipboard',
      arguments: [],
      dispatchToStore: false,
      onClick: () => navigator.clipboard.writeText(generateOutturn(activeOutturn))
    }
  }

  const generateOutturnButtonProps: ButtonProps = { 
    variant: 'primary',
    // onClick: createButton(
    //   setModal,
    //   "Generate Outturn",
    //   generateOutturnModal
    // ) 
  }

  const renderCaskListItemContainer = () => (
    localCaskOrder.map((cask, idx) => (
      <CaskListItemContainer
        key={ cask.id }
        index={ idx }
        cask={ cask }
      />
    ))
  );

  const renderDragDropProvided = provided => (
    <div
      ref={ provided.innerRef }
      { ...provided.droppableProps }
    >
      { localCaskOrder && renderCaskListItemContainer() }
      { provided.placeholder }
    </div>
  )

  return (
    <Column justifyContent='center'>
      <Row alignItems='center'>
        { evaluateUserType && <Checkbox { ...checkAllCasksCheckboxProps } /> }
        {/* { evaluateUserType && <ButtonManager { ...editManyCasksButtonProps } /> } */}
        {/* { evaluateUserType && <ButtonManager { ...cancelChangesButtonProps } /> } */}
      </Row>
      <Row alignItems='flex-start'>
        <Column alignItems='center'>
          <List>
            <DragDropContext onDragEnd={ onDragEnd }>
              <Droppable droppableId="list">
                { provided => renderDragDropProvided(provided) }
              </Droppable>
            </DragDropContext>
          </List>
          {/* <ButtonManager { ...generateOutturnButtonProps } /> */}
        </Column>
        <Column>
        <ActiveCaskContainer />
        </Column>
      </Row>
    </Column>
  );
};
