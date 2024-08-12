import React from "react";
import { useAppDispatch } from "../../hooks";

import { Column, Header } from "../../components/LayoutComponents";
import * as Typography from "../../components/Typography";
import IconButton from "../../components/IconButton";
import Assets from "../../assets";

import { dialogActions } from "../../redux/actions";
 
import { ComponentProps } from "./types";

import { utilityFunctions } from "../../utilities";

import { Styles } from "../../enums";


const PreviewOutturn: React.FC<ComponentProps> = ({ name, description, casks }) => {

  const dispatch = useAppDispatch();

  return (
    <Column>
      <Header
        alignItems={ Styles.Layout.AlignItems.center }
        justifyContent={ Styles.Layout.JustifyContent.spaceBetween }
        width="full"
        padding={ Styles.Spacing.small }
      >
        <Typography.Subheading>Previewing { name }</Typography.Subheading>
        <IconButton
          path={ Assets.closeIcon }
          onClick={ () => dispatch(dialogActions.resetDialog()) }
          variant={ Styles.ButtonVariants.tertiary }
        />
      </Header>
      <div dangerouslySetInnerHTML={{ __html: utilityFunctions.generateOutturn(name, description, casks) }} style={{ padding: "16px" }}></div>
    </Column>
  )
};

export default PreviewOutturn;
