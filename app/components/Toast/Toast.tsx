import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';

import Paper from "../Paper";
import { Row } from "../LayoutComponents";
import IconButton from "../IconButton";
import ASSETS from "../../assets";

import { toastActions } from '../../redux/actions';

import { ComponentProps } from "./types";

import { Styles } from "../../enums";


const Toast: React.FC<ComponentProps> = ({ toast }) => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    const interval = setTimeout(() => {
      if(toast.id) {
        dispatch(toastActions.removeToast({ id: toast.id }));
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [toast]);

  return (
    <Paper
      padding={ Styles.Spacing.small }
      mt={ Styles.Spacing.extraSmall }
    >
      <Row alignItems={ Styles.Layout.AlignItems.center}>
        <IconButton
          path={ ASSETS.closeIcon }
          onClick={ () => dispatch(toastActions.removeToast({ id: toast.id })) }
          variant={ Styles.ButtonVariants.tertiary }
          color={ Styles.Colors.danger }
        />
        { toast.message }
      </Row>
    </Paper>
  );
};

export default Toast;
