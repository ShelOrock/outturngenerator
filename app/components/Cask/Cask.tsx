import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { useAppDispatch } from "../../hooks";

import { DeleteCaskDialog } from "../../Dialogues";

import Chip from "../Chip";
import TableData from "../TableComponents/TableData";
import TableRow from "../TableComponents/TableRow";
import IconButton from "../IconButton";
import { Row } from "../LayoutComponents";
import * as Typography from "../Typography";

import ASSETS from "../../assets";

import { utilityFunctions } from "../../utilities";

import { dialogActions } from "../../redux/actions";

import { ComponentProps } from "./types";

import { Styles } from "../../enums";

enum DefaultValues {
  notApplicable = "N/A"
};

const Cask: React.FC<ComponentProps> = ({
  id,
  caskPosition,
  caskNumber,
  name,
  price,
  region,
  age,
  flavorProfile
}) => {

  const dispatch = useAppDispatch();

  const { setNodeRef, listeners, attributes } = useSortable({ id });

  return (
    <TableRow forwardRef={ setNodeRef }>
      <TableData>
        <Row alignItems={ Styles.Layout.AlignItems.center }>
          <IconButton
            path={ ASSETS.dragHandleIcon }
            onClick={ () => {} }
            variant={ Styles.ButtonVariants.tertiary }
            color={ Styles.Colors.primary }
            { ...listeners }
            { ...attributes }
          />
          { caskPosition }
        </Row>
      </TableData>
      <TableData>{ caskNumber || DefaultValues.notApplicable }</TableData>
      <TableData>{ utilityFunctions.truncateText(name, 40) || DefaultValues.notApplicable }</TableData>
      <TableData>{ price ? `$${ price }` : DefaultValues.notApplicable }</TableData>
      <TableData>{ region || DefaultValues.notApplicable }</TableData>
      <TableData>{ age ? `${ age } years` : DefaultValues.notApplicable }</TableData>
      <TableData>
        <Chip
          color={ flavorProfile }
          selected
        >
          <Typography.Body
            overflow
            mt={ Styles.Spacing.extraSmall }
            mr={ Styles.Spacing.small }
            mb={ Styles.Spacing.extraSmall }
            ml={ Styles.Spacing.extraSmall }
          >{ flavorProfile || DefaultValues.notApplicable }</Typography.Body>
        </Chip>
      </TableData>
      <TableData>
        <IconButton
          path={ ASSETS.deleteIcon }
          onClick={ () => dispatch(dialogActions.setDialog(
            <DeleteCaskDialog
              id={ id }
              caskNumber={ caskNumber }
              name={ name }
            />
          )) }
          variant={ Styles.ButtonVariants.tertiary }
          color={ Styles.Colors.danger }
        />
        <IconButton
          path={ ASSETS.editIcon }
          onClick={ () => dispatch(dialogActions.setDialog(
            <></>
          )) }
          variant={ Styles.ButtonVariants.tertiary }
          color={ Styles.Colors.success }
        />
      </TableData>
    </TableRow>
  )
};

export default Cask;
