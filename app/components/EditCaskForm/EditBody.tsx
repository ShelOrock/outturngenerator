import * as React from "react";
const { useEffect, useState, useReducer } = React;
import { useTypedSelector } from "../../utils";

import PageHeader from "../Header/PageHeader";
import InputManager from "../Form/InputManager";
import * as StyledComponents from "../styledcomponents/index";
const {
  StyledDiv: { Row },
  StyledNavigation: { LinkButton },
} = StyledComponents;

import * as thunks from "../../redux/thunks";
const {
  casksThunks: { editCask },
} = thunks;

import { createButton } from "../../buttonProps";
import { editCaskBodyInputProps } from "../../inputProps";

import { InputOnChangeType, LocalReducerFunctionType } from "../../types/index";
import InputGroupManager from "../Form/InputGroupManager";
import { InputFormContainer } from "../styledcomponents/Form";

export default () => {
  const { activeCask, activeOutturn } = useTypedSelector((state) => state);
  const {
    id,
    age,
    date,
    region,
    caskType,
    bottleOutturn,
    allocation,
    description,
  } = activeCask;
  const [, setIsEdited] = useState(false);

  const initialState = {
    age,
    date,
    region,
    caskType,
    bottleOutturn,
    allocation,
    description,
  };
  const reducer: LocalReducerFunctionType<typeof initialState> = (
    state = initialState,
    action
  ) => {
    switch (action.name) {
      case `${action.name}`:
        return {
          ...state,
          [action.name]: action.value,
        };

      default:
        return state;
    }
  };

  const [localState, dispatchLocally] = useReducer(reducer, initialState);

  useEffect(() => checkLocalStateEdit(initialState, localState), [
    activeCask,
    localState,
  ]);

  const handleOnChange: InputOnChangeType = ({ target: { name, value } }) =>
    dispatchLocally({ name, value });

  const checkLocalStateEdit = (
    previousState: typeof localState,
    currentState: typeof localState
  ): void => {
    setIsEdited(false);

    Object.keys(previousState).forEach((key) => {
      if (key !== "updatedAt") {
        if (previousState[key] !== currentState[key]) setIsEdited(true);
      }
    });
  };

  return (
    <div>
      <PageHeader
        subNavigationProps={{
          link: `/outturn/${activeOutturn.id}`,
          destination: "< Return to Cask List",
        }}
        toolbarProps={{
          pageTitle: `Editing Cask no. ${activeCask.caskNumber} ${activeCask.name}`,
          addButtonProps: {
            disabled: !setIsEdited,
            onClickProps: createButton(
              editCask,
              "Save",
              activeCask.id,
              localState
            )
          }
        }}
      />
      <InputFormContainer>
        {editCaskBodyInputProps(handleOnChange, localState).map((input, idx) => Array.isArray(input)
        ? <InputGroupManager key={idx} props={input} />
        : <InputManager key={idx} props={input} />
        )}
        <Row>
          <LinkButton to={`/edit/${id}/step1`}>{"< Back"}</LinkButton>
          <LinkButton to={`/outturn/${activeOutturn.id}`}>{"Finish and Return to Cask List >"}</LinkButton>
        </Row>
      </InputFormContainer>
    </div>
  );
};
