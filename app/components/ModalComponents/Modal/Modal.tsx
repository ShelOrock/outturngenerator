import React from "react";

import StyledModal from "./styles";
import ModalOverlay from "../ModalOverlay";
import { Row } from "../../LayoutComponents";

import { ComponentProps } from "./types";

const Modal: React.FC<ComponentProps> = ({
  open = false,
  children,
  ...spacingProps
}) => {
  return open && (
    <Row>
      <ModalOverlay />
      <StyledModal { ...spacingProps }>
        { children }
      </StyledModal>
    </Row>
  )
};

export default Modal;
