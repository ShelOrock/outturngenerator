import React from "react";
import { useAppSelector } from "../../../hooks";

import { Row, Column } from "../../../components/LayoutComponents";
import Button from "../../../components/Button";
import * as Typography from "../../../components/Typography";
import List from "../../../components/List";

import { appDataSelectors } from "../../../redux/selectors";

import { AppData, Cask, Styles } from "../../../enums";


const ConfirmationStep = ({
  name, 
  description,
  casks,
  containsErrors,
  decrementStep,
  onSubmit
}) => {

  const caskNames = useAppSelector(appDataSelectors.selectAppData(AppData.casks, {
    filters: { id: casks },
    attributes: [ Cask.id, Cask.name ],
    limit: 5
  }));

  return (
    <Column width="full">
      <Row width="full">
        <Typography.Body weight={ Styles.FontWeights.bold }>Name</Typography.Body>
        <Typography.Body ml={ Styles.Spacing.extraSmall }>{ name }</Typography.Body>
      </Row>
      <Row width="full">
        <Typography.Body weight={ Styles.FontWeights.bold }>Description</Typography.Body>
        <Typography.Body ml={ Styles.Spacing.extraSmall }>{ description }</Typography.Body>
      </Row>
      <Row width="full">
        <Typography.Body weight={ Styles.FontWeights.bold }>Casks</Typography.Body>
        <List
          componentData={ caskNames }
          renderComponent={ cask => <Typography.Body>{ cask.name }</Typography.Body>}
        />
        { casks.length - caskNames.length > 0 && <Typography.Body>{ casks.length - caskNames.length } More</Typography.Body> }
      </Row>
      <Row
        justifyContent={ Styles.Layout.JustifyContent.spaceBetween }
        alignItems={ Styles.Layout.AlignItems.center }
        width="full"
        mt={ Styles.Spacing.medium }
      >
        <Button onClick={ decrementStep }>Back</Button>
        <Button onClick={ onSubmit }>Submit</Button>
      </Row>
    </Column>
  )
};

export default ConfirmationStep;
