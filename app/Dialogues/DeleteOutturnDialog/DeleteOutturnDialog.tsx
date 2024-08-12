import React from "react";
import { useAppDispatch } from "../../hooks";

import { Row, Column, Header } from "../../components/LayoutComponents";
import * as Typography from "../../components/Typography";
import IconButton from "../../components/IconButton";
import ASSETS from "../../assets";
import Button from "../../components/Button";

import { dialogActions } from "../../redux/actions";
import { outturnsThunks } from "../../redux/thunks";

import { ComponentProps } from "./types";

import { Styles } from "../../enums";


const DeleteOutturnDialog: React.FC<ComponentProps> = ({ id, name }) => {

  const dispatch = useAppDispatch();

  return (
    <Column>
      <Header
        alignItems={ Styles.Layout.AlignItems.center }
        justifyContent={ Styles.Layout.JustifyContent.spaceBetween }
        width="full"
        padding={ Styles.Spacing.small }
      >
        <Typography.Subheading>Delete Outturn { name }?</Typography.Subheading>
        <IconButton
          path={ ASSETS.closeIcon }
          onClick={ () => dispatch(dialogActions.resetDialog()) }
          variant={ Styles.ButtonVariants.tertiary }
        />
      </Header>
      <Row width="full" padding={ Styles.Spacing.extraSmall }>
        <Row
          justifyContent={ Styles.Layout.JustifyContent.flexEnd }
          alignItems={ Styles.Layout.AlignItems.center }
          width="full"
          padding={ Styles.Spacing.extraSmall }
        >
          <IconButton
            path={ ASSETS.deleteIcon }
            variant={ Styles.ButtonVariants.tertiary }
            color={ Styles.Colors.danger }
            onClick={ () => dispatch(outturnsThunks.deleteOutturn(id)) }
          >Delete Cask</IconButton>
          <Button
            variant={ Styles.ButtonVariants.tertiary }
            onClick={ () => dispatch(dialogActions.resetDialog()) }
          >Keep Outturn</Button>
        </Row>
      </Row>
    </Column>
    )
};

export default DeleteOutturnDialog;
