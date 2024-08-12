import React from "react";
import { useForm } from "../../../hooks";

import { Row, Column } from "../../../components/LayoutComponents";
import Button from "../../../components/Button";
import InputModule from "../../../components/InputModule";
import TextAreaModule from "../../../components/TextAreaModule";

import { ComponentProps } from "./types";

import { Styles } from "../../../enums";


const BasicInformationStep: React.FC<ComponentProps> = ({
  formValues,
  incrementStep,
  dispatchToForm
}) => {

  const validations = {
    caskNumber: [
      {
        isRequired: true,
        message: "Cask Number cannot be empty"
      },
      {
        matchPattern: /^$|^\d+\.\d+$/,
        message: "Cask Number can only contain numbers and a decimal (e.g. 123.2)"
      }
    ],
    name: [
      {
        isRequired: true,
        message: "Name cannot be empty"
      },
    ],
  }

  const {
    formValues: {
      caskNumber,
      name,
      description
    },
    handleOnChange,
    formErrors,
    containsErrors
  } = useForm({
    caskNumber: formValues.caskNumber,
    name: formValues.name,
    description: formValues.description
  }, validations);

  return (
    <Column width="full">
      <InputModule
        id="caskNumber"
        type="text"
        name="caskNumber"
        value={ caskNumber }
        label="Cask Number"
        onChange={ handleOnChange }
        error={ formErrors.caskNumber }
        width="full"
        mt={ Styles.Spacing.medium }
      />
      <InputModule
        id="name"
        type="text"
        name="name"
        value={ name }
        label="Name"
        onChange={ handleOnChange }
        error={ formErrors.name }
        width="full"
        mt={ Styles.Spacing.medium }
      />
      <TextAreaModule
        id="description"
        name="description"
        value={ description }
        label="Description"
        helperText="(optional)"
        onChange={ handleOnChange }
        error={ formErrors.description }
        width="full"
        mt={ Styles.Spacing.medium }
      />
      <Row
        justifyContent={ Styles.Layout.JustifyContent.spaceBetween }
        alignItems={ Styles.Layout.AlignItems.center }
        width="full"
        mt={ Styles.Spacing.medium }
      >
        <Button
          onClick={ () => {} }
          disabled
        >Back</Button>
        <Button
          onClick={ () => {
            dispatchToForm({
              caskNumber,
              name,
              description
            });
            incrementStep();
          } }
          disabled={ containsErrors }
        >Next</Button>
      </Row>
    </Column>
  );
};

export default BasicInformationStep;
