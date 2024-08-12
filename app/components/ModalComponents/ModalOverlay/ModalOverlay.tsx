import React from "react";
import { useAppDispatch } from "../../../hooks";

import StyledModalOverlay from "./styles";

import { dialogActions } from "../../../redux/actions";

import { ComponentProps } from "./types";

const ModalOverlay: React.FC<ComponentProps> = ({ children }) => {

  const dispatch = useAppDispatch();

  return (
    <StyledModalOverlay onClick={ () => dispatch(dialogActions.resetDialog()) }>{ children }</StyledModalOverlay>
  );
};

export default ModalOverlay;
