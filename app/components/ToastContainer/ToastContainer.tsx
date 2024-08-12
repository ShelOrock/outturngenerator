import React from "react";
import { useAppSelector } from "../../hooks";

import List from "../List";
import Toast from "../Toast";

import { toastsSelectors } from "../../redux/selectors";

import StyledToastContainer from "./styles";

import { ComponentProps } from "./types";


const ToastContainer: React.FC<ComponentProps> = () => {

  const toasts = useAppSelector(toastsSelectors.selectToasts);

  return (
    <StyledToastContainer>
      <List 
        componentData={ toasts }
        renderComponent={ toast => <Toast toast={ toast } />}
      />
    </StyledToastContainer>
  );
};

export default ToastContainer;
