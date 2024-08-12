import React from "react";
import { useAppDispatch } from "../../hooks";

import { Row, Column, Header } from "../../components/LayoutComponents";
import * as Typography from "../../components/Typography";
import IconButton from "../../components/IconButton";
import Button from "../../components/Button";
import ASSETS from "../../assets";

import { casksThunks } from "../../redux/thunks";
import { dialogActions } from "../../redux/actions";
 
import { ComponentProps } from "./types";

import { Styles } from "../../enums";


const DeleteCaskDialog: React.FC<ComponentProps> = ({ 
  id,
  caskNumber,
  name
}) => {

  const dispatch = useAppDispatch();

  return (
    <Column>
      <Header
        alignItems={ Styles.Layout.AlignItems.center }
        justifyContent={ Styles.Layout.JustifyContent.spaceBetween }
        width="full"
        padding={ Styles.Spacing.small }
      >
        <Typography.Subheading>Delete Cask { caskNumber } - { name }?</Typography.Subheading>
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
          mt={ Styles.Spacing.small }
          mb={ Styles.Spacing.small }
        >
          <IconButton
            path={ ASSETS.deleteIcon }
            variant={ Styles.ButtonVariants.tertiary }
            color={ Styles.Colors.danger }
            onClick={ () => dispatch(casksThunks.deleteCask(id))
          }>Delete Cask</IconButton>
          <Button
            variant={ Styles.ButtonVariants.tertiary }
            onClick={ () => dispatch(dialogActions.resetDialog()) }>Keep Cask</Button>
        </Row>
      </Row>
    </Column>
  )
};

export default DeleteCaskDialog;
