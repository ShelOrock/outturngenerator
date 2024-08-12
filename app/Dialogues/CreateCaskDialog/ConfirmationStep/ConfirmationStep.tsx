import React from "react";
import { useAppSelector } from "../../../hooks"

import { Row, Column } from "../../../components/LayoutComponents";
import Button from "../../../components/Button";
import * as Typography from "../../../components/Typography";

import { ComponentProps } from "./types";

import { appDataSelectors } from "../../../redux/selectors";

import { AppData, Outturn, Styles } from "../../../enums";


const ConfirmationStep: React.FC<ComponentProps> = ({
  caskNumber,
  name,
  description,
  price,
  region,
  age,
  flavorProfile,
  outturnId,
  decrementStep,
  onSubmit,
  containsErrors
}) => {

  const outturn = useAppSelector(appDataSelectors.selectAppDataById(AppData.outturns, {
    id: outturnId,
    attributes: [ Outturn.name ]
  }));

  return (
    <Column
      width="full"
      mt={ Styles.Spacing.medium }
    >
      <Row width="full">
        <Typography.Body weight={ Styles.FontWeights.bold }>Cask Number</Typography.Body>
        <Typography.Body ml={ Styles.Spacing.extraSmall }>{ caskNumber }</Typography.Body>
      </Row>
      <Row width="full">
        <Typography.Body weight={ Styles.FontWeights.bold }>Name</Typography.Body>
        <Typography.Body ml={ Styles.Spacing.extraSmall }>{ name }</Typography.Body>
      </Row>
      <Row width="full">
        <Typography.Body weight={ Styles.FontWeights.bold }>Description</Typography.Body>
        <Typography.Body ml={ Styles.Spacing.extraSmall }>{ description }</Typography.Body>
      </Row>
      <Row width="full">
        <Typography.Body weight={ Styles.FontWeights.bold }>Price</Typography.Body>
        <Typography.Body ml={ Styles.Spacing.extraSmall }>{ price }</Typography.Body>
      </Row>
      <Row width="full">
        <Typography.Body weight={ Styles.FontWeights.bold }>Region</Typography.Body>
        <Typography.Body ml={ Styles.Spacing.extraSmall }>{ region }</Typography.Body>
      </Row>
      <Row width="full">
        <Typography.Body weight={ Styles.FontWeights.bold }>Age</Typography.Body>
        <Typography.Body ml={ Styles.Spacing.extraSmall }>{ age }</Typography.Body>
      </Row>
      <Row width="full">
        <Typography.Body weight={ Styles.FontWeights.bold }>Flavor Profile</Typography.Body>
        <Typography.Body ml={ Styles.Spacing.extraSmall }>{ flavorProfile }</Typography.Body>
      </Row>
      <Row width="full">
        <Typography.Body weight={ Styles.FontWeights.bold }>Outturn:</Typography.Body>
        <Typography.Body ml={ Styles.Spacing.extraSmall }>{ outturn.name }</Typography.Body>
      </Row>
      <Row
        justifyContent={ Styles.Layout.JustifyContent.spaceBetween }
        alignItems={ Styles.Layout.AlignItems.center }
        width="full"
        mt={ Styles.Spacing.medium }
      >
        <Button onClick={ decrementStep }>Back</Button>
        <Button
          onClick={ onSubmit }
          disabled={ containsErrors }
        >Create</Button>
      </Row>
    </Column>
  )
};

export default ConfirmationStep;
