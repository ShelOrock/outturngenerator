import React from "react";

import Step from "../Step";
import { Row } from "../../LayoutComponents";
import ComponentMapping from "../../ComponentMapping";

import { ComponentProps } from "./types";

import { Styles } from "../../../enums";


const Stepper: React.FC<ComponentProps> = ({
  steps,
  activeStep,
  setActiveStep
}) => (
  <Row
    justifyContent={ Styles.Layout.JustifyContent.spaceBetween }
    alignItems={ Styles.Layout.AlignItems.center }
    width="full"
    mt={ Styles.Spacing.medium }
  >
    <ComponentMapping
      componentData={ steps }
      renderComponent={ ({ id, step, label }) => (
        <Step
          index={ id }
          active={ activeStep === step }
          onClick={ () => setActiveStep(step) }
        >{ label }</Step>
      ) }
    />
  </Row>
);

export default Stepper;