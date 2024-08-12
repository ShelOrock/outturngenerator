import React from "react";
import { useAppSelector, useSelect, useForm } from "../../../hooks";

import { Row, Column } from "../../../components/LayoutComponents";
import Button from "../../../components/Button";
import InputModule from "../../../components/InputModule";
import SelectModule from "../../../components/SelectModule";

import { FLAVOR_PROFILES, REGIONS } from "../../../utilities/functions";

import { appDataSelectors } from "../../../redux/selectors";

import { ComponentProps } from "./types";

import { AppData, Outturn, Styles } from "../../../enums";

const DetailsStep: React.FC<ComponentProps> = ({
  formValues,
  isEditing = false,
  decrementStep,
  incrementStep,
  dispatchToForm
}) => {

  const validations = {
    price: [
      {
        isRequired: true,
        message: "Price cannot be empty"
      },
      {
        matchPattern: /^$|^\d+\.\d{2}$|^\d+$/,
        message: "Price must be a valid amount"
      },
      {
        minimum: 0.1,
        message: "Price must be a value between 0 and 9999.99"
      },
      {
        maximum: 9999.99,
        message: "Price must be a value between 0 and 9999.99"
      }
    ],
    region: [
      {
        isRequired: true,
        message: "Region cannot be empty"
      }
    ],
    age: [
      {
        isRequired: true,
        message: "Age cannot be empty"
      },
      {
        matchPattern: /^$|^\d+$/,
        message: "Age can only contain digits",
      },
      {
        minimum: 0.1,
        message: "Age must be a value between 0 and 99"
      },
      {
        maximum: 99,
        message: "Age must be a value between 0 and 99"
      }
    ],
    flavorProfile: [
      {
        isRequired: true,
        message: "Flavor Profile cannot be empty"
      }
    ]
  };

  const {
    formValues: {
      price,
      region,
      age,
      flavorProfile,
      outturnId
    },
    handleOnChange,
    formErrors,
    containsErrors
  } = useForm({
    price: formValues.price,
    region: formValues.region,
    age: formValues.age,
    flavorProfile: formValues.flavorProfile,
    outturnId: formValues.outturnId
  }, validations)

  const outturns = useAppSelector(appDataSelectors.selectAppData(AppData.outturns, {
    attributes: [
      Outturn.id,
      Outturn.name
    ]
  }));

  const { options: regionOptions } = useSelect("Choose a region", REGIONS, "region", "region");
  const { options: flavorProfileOptions } = useSelect("Choose a flavor profile", FLAVOR_PROFILES, "flavorProfile", "flavorProfile");
  const { options: outturnOptions } = useSelect("Choose an outturn", outturns, "name", "id");

  return (
    <Column width="full">
      <InputModule
        id="price"
        type="text"
        name="price"
        value={ price }
        label="Price"
        onChange={ handleOnChange }
        error={ formErrors.price }
        width="md"
        mt={ Styles.Spacing.medium }
      />
      <SelectModule
        id="region"
        name="region"
        value={ region }
        label="Region"
        onChange={ handleOnChange }
        options={ regionOptions }
        error={ formErrors.region }
        width="lg"
        mt={ Styles.Spacing.medium }
      />
      <InputModule
        id="age"
        type="text"
        name="age"
        value={ age }
        label="Age"
        onChange={ handleOnChange }
        error={ formErrors.age }
        width="md"
        mt={ Styles.Spacing.medium }
      />
      <SelectModule
        id="flavorProfile"
        name="flavorProfile"
        value={ flavorProfile }
        label="Flavor Profile"
        onChange={ handleOnChange }
        options={ flavorProfileOptions }
        error={ formErrors.flavorProfile }
        width="lg"
        mt={ Styles.Spacing.medium }
      />
      <SelectModule
        id="outturnId"
        name="outturnId"
        value={ outturnId }
        label="Outturn"
        onChange={ handleOnChange }
        options={ outturnOptions }
        error={ formErrors.outturnId }
        disabled
        width="lg"
        mt={ Styles.Spacing.medium }
      />
      <Row
        justifyContent={ Styles.Layout.JustifyContent.spaceBetween }
        alignItems={ Styles.Layout.AlignItems.center }
        width="full"
        mt={ Styles.Spacing.medium }
      >
        <Button onClick={ decrementStep }>Back</Button>
        <Button
          onClick={ () => {
            incrementStep();
            dispatchToForm({
              price,
              region,
              age,
              flavorProfile,
              outturnId
            });
          } }
          disabled={ containsErrors }
        >Next</Button>
      </Row>
    </Column>
  );
};

export default DetailsStep;
