import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";

import * as Dialogs from "../../Dialogues";

import { Card } from "../Card";
import { Row } from "../LayoutComponents"
import List from "../List";
import Chip from "../Chip";
import IconButton from "../IconButton";
import * as Typography from "../Typography";
import ASSETS from "../../assets";

import { dialogActions } from "../../redux/actions";
import { appDataSelectors } from "../../redux/selectors";

import { ComponentProps } from "./types";

import { AppData, Cask, Styles } from "../../enums";

import { utilityFunctions } from "../../utilities";


const OutturnCard: React.FC<ComponentProps> = ({
  id,
  name,
  description,
}) => {

  const dispatch = useAppDispatch();

  const casks = useAppSelector(appDataSelectors.selectAppData(AppData.casks, {
    filters: { outturnId: id },
    attributes: [
      Cask.id,
      Cask.name,
      Cask.flavorProfile
    ],
    limit: 4
  }));

  return (
    <Card
      heading={ utilityFunctions.truncateText(name, 20) }
      body={ utilityFunctions.truncateText(description, 75) }
      content={
        <List
          componentData={ casks }
          renderComponent={ cask => (
            <Chip
              color={ cask.flavorProfile }
              selected
              mt={ Styles.Spacing.extraSmall }
            >
              <Typography.Body
                overflow
                mt={ Styles.Spacing.extraSmall }
                mr={ Styles.Spacing.small }
                mb={ Styles.Spacing.extraSmall }
                ml={ Styles.Spacing.extraSmall }
              >{ cask.name }</Typography.Body>
            </Chip>
          ) }
          mt={ Styles.Spacing.small }
        />
      }
      actions={ 
        <Row
          justifyContent={ Styles.Layout.JustifyContent.flexEnd } 
          width="full"
          mt={ Styles.Spacing.small }
          mr={ Styles.Spacing.small }
        >
          <IconButton
            path={ ASSETS.bookmarkIcon }
            onClick={ () => {} }
            variant={ Styles.ButtonVariants.secondary }
            color={ Styles.Colors.primary }
            mr={ Styles.Spacing.extraSmall }
          />
          <IconButton
            path={ ASSETS.deleteIcon }
            onClick={ e => { 
              e.preventDefault();
              dispatch(dialogActions.setDialog(
                <Dialogs.DeleteOutturnDialog
                  id={ id }
                  name={ name }
                />
              ))
            } }
            variant={ Styles.ButtonVariants.secondary }
            color={ Styles.Colors.danger }
          >Delete</IconButton>
        </Row>
      }
      mt={ Styles.Spacing.small }
      mr={ Styles.Spacing.small }
      padding={ Styles.Spacing.medium }
    />
  )
};

export default OutturnCard;
