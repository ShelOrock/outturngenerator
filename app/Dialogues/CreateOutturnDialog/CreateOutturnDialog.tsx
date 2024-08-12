import React from "react";
import { useAppDispatch, useForm, useStepper } from "../../hooks";

import BasicInformationStep from "./BasicInformationStep";
import DetailsStep from "./DetailsStep";
import ConfirmationStep from "./ConfirmationStep";
import { Row, Column, Header } from "../../components/LayoutComponents";
import Stepper from "../../components/StepperComponents/Stepper";
import IconButton from "../../components/IconButton"
import * as Typography from "../../components/Typography";
import Assets from "../../assets";

import { ComponentProps } from "./types";

import { outturnsThunks } from "../../redux/thunks";

import { dialogActions } from "../../redux/actions";

import { Styles } from "../../enums";


enum FormSteps {
  basicInformation = "Basic Information",
  details = "Details",
  confirmation = "Confirmation"
};

const CreateOutturnDialog: React.FC<ComponentProps> = () => {

  const dispatch = useAppDispatch();

  const {
    steps,
    activeStep,
    setActiveStep,
    incrementStep,
    decrementStep
  } = useStepper([ FormSteps.basicInformation, FormSteps.details, FormSteps.confirmation ]);

  const {
    formValues: {
      name,
      description,
      casks
    },
    formValues,
    setFormValues,
    containsErrors,
  } = useForm({
    name: "",
    description: "",
    casks: []
  });

  const dispatchToForm = payload => {
    setFormValues({
      ...formValues,
      ...payload
    });
  };

  return (
    <Column width="xl">
      <Header 
        alignItems={ Styles.Layout.AlignItems.center }
        justifyContent={ Styles.Layout.JustifyContent.spaceBetween }
        width="full"
        padding={ Styles.Spacing.small }
      >
        <Typography.Subheading>Adding a new Outturn</Typography.Subheading>
        <IconButton
          path={ Assets.closeIcon }
          onClick={ () => dispatch(dialogActions.resetDialog()) }
          variant={ Styles.ButtonVariants.tertiary }
        />
      </Header>
      <Column
        width="full"
        padding={ Styles.Spacing.medium }
      >
        <Stepper
          steps={ steps }
          activeStep={ activeStep }
          setActiveStep={ setActiveStep }
        />
        <Row width="full" mt={ Styles.Spacing.small }>
          { activeStep === 1 && (
            <BasicInformationStep
              formValues={ formValues }
              incrementStep={ incrementStep }
              dispatchToForm={ dispatchToForm }
            />
          ) }
          { activeStep === 2 && (
            <DetailsStep
              formValues={ formValues }
              incrementStep={ incrementStep }
              decrementStep={ decrementStep }
              dispatchToForm={ dispatchToForm }
            />
          ) }
          { activeStep === 3  && (
            <ConfirmationStep
              name={ name }
              description={ description }
              casks={ casks }
              containsErrors={ containsErrors }
              decrementStep={ decrementStep }
              onSubmit={ () => dispatch(outturnsThunks.createOutturn(formValues)) }
            />
          ) }
        </Row>
      </Column>
    </Column>
  );
};

export default CreateOutturnDialog;
