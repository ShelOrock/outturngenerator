import React from "react";

import { useAppDispatch, useAppSelector, useForm, useStepper } from "../../hooks";

import BasicInformationStep from "./BasicInformationStep";
import DetailsStep from "./DetailsStep";
import ConfirmationStep from "./ConfirmationStep";

import { Row, Column, Header } from "../../components/LayoutComponents";
import * as Typography from "../../components/Typography";
import Stepper from "../../components/StepperComponents/Stepper";
import IconButton from "../../components/IconButton";
import Assets from "../../assets";

import { appDataSelectors } from "../../redux/selectors";
import { casksThunks } from "../../redux/thunks";

import { dialogActions } from "../../redux/actions";

import { ComponentProps } from "./types";

import { AppData, Outturn, Cask, Styles } from "../../enums";

enum FormSteps {
  basicInformation = "Basic Information",
  details = "Details",
  confirmation = "Confirmation"
};

const CreateCaskDialog: React.FC<ComponentProps> = ({ isEditing = false }) => {

  const dispatch = useAppDispatch();

  const {
    steps,
    activeStep,
    setActiveStep,
    incrementStep,
    decrementStep
  } = useStepper([ FormSteps.basicInformation, FormSteps.details, FormSteps.confirmation ]);

  const activeOutturn = useAppSelector(appDataSelectors.selectActiveId(AppData.outturns, {
    attributes: [ 
      Outturn.id,
      Outturn.name
    ]
  }));

  const casks = useAppSelector(appDataSelectors.selectAppData(AppData.casks, {
    filters: { outturnId: activeOutturn.id },
    attributes: [ Cask.id ]
  }));

  const {
    formValues: {
      caskNumber,
      name,
      description,
      price,
      region,
      age,
      flavorProfile,
      outturnId,
  },
  formValues,
  setFormValues,
  formErrors,
  containsErrors,
  handleOnChange
} = useForm({
    caskNumber: "",
    name: "",
    description: "",
    price: "",
    region: "",
    age: "",
    flavorProfile: "",
    outturnId: activeOutturn.id
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
        <Typography.Subheading>Adding new product to Outturn.</Typography.Subheading>
        <IconButton
          path={ Assets.closeIcon }
          onClick={ () => dispatch(dialogActions.resetDialog()) }
          variant={ Styles.ButtonVariants.tertiary }
        />
      </Header>
      <Column width="full" padding={ Styles.Spacing.medium }>
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
              decrementStep={ decrementStep }
              incrementStep={ incrementStep }
              dispatchToForm={ dispatchToForm }
            />
          ) }
          { activeStep === 3 && (
            <ConfirmationStep
              caskNumber={ caskNumber }
              name={ name }
              description={ description }
              price={ price }
              age={ age }
              region={ region }
              flavorProfile={ flavorProfile }
              outturnId={ outturnId }
              decrementStep={ decrementStep }
              onSubmit={ () => dispatch(casksThunks.createCask({ ...formValues, caskPosition: casks.length })) }
              containsErrors={ containsErrors }
            />
          ) }
        </Row>
      </Column>
    </Column>
  );
};

export default CreateCaskDialog;
