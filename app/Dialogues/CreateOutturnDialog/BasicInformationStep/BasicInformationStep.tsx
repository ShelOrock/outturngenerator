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
    name: [
      {
        isRequired: true,
        message: "Name cannot be empty"
      }
    ]
  };

  const { 
    formValues: {
      name,
      description
    },
    handleOnChange,
    formErrors,
    containsErrors
  } = useForm({
    name: formValues.name,
    description: formValues.description
  }, validations);

  return (
    <Column width="full">
      <InputModule
        id="name"
        type="text"
        name="name"
        value={ name }
        label="Outturn Name"
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
        <Button onClick={ () => {} } disabled>Back</Button>
        <Button
          onClick={ () => {
            incrementStep();
            dispatchToForm({
              name,
              description
            });
          } }
          disabled={ containsErrors }
        >Next</Button>
      </Row>
    </Column>
  )
};

export default BasicInformationStep;
