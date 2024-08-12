//Dependency Libraries
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";

//Components
import { AppRouter } from "./routers";
import Modal from "./components/ModalComponents/Modal";
import ToastContainer from "./components/ToastContainer";

import { dialogSelectors } from "./redux/selectors";

//Redux thunks
import {
  outturnsThunks,
  casksThunks,
} from "./redux/thunks";

// import { activeUserThunks } from "../redux/thunks";

interface ComponentProps {};

const Root: React.FC<ComponentProps> = () => {

  const dispatch = useAppDispatch();

  const dialog = useAppSelector(dialogSelectors.selectDialog);

  useEffect(() => {
    // dispatch(activeUserThunks.getActiveUser(document.cookie.replace(/sessionId=/, "")));
    dispatch(outturnsThunks.getOutturns());
    dispatch(casksThunks.getCasks());
  }, []);

  return (
    <>
      <AppRouter />
      <Modal open={ dialog.dialogOpen }>{ dialog.dialogContent }</Modal>
      <ToastContainer />
    </>
  )
};

export default Root;
