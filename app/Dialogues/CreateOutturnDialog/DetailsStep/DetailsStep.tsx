import React, { useState } from "react";
import { useAppSelector, useSearchableDropdown } from "../../../hooks";

import { Row, Column } from "../../../components/LayoutComponents";
import Button from "../../../components/Button";
import Paper from "../../../components/Paper";
import InputModule from "../../../components/InputModule";
import List from "../../../components/List";
import ComponentMapping from "../../../components/ComponentMapping";
import Chip from "../../../components/Chip";
import * as Typography from "../../../components/Typography";
import Icon from "../../../components/Icon";
import ASSETS from "../../../assets";

import { ComponentProps } from "./types";

import { appDataSelectors } from "../../../redux/selectors";

import { AppData, Cask, Styles } from "../../../enums";


const DetailsStep: React.FC<ComponentProps> = ({
  formValues,
  incrementStep,
  decrementStep,
  dispatchToForm
}) => {

  const {
    ref,
    isDropdownOpen,
    toggleDropdown
  } = useSearchableDropdown();

  const [ list, setList ] = useState(formValues.casks);

  const [ searchParameter, setSearchParameter ] = useState(""); 

  const selectedCasks = useAppSelector(appDataSelectors.selectAppData(AppData.casks, {
    filters: { id: list },
    attributes: [
      Cask.id,
      Cask.caskNumber,
      Cask.name,
      Cask.flavorProfile
    ]
  }));

  const caskList = useAppSelector(appDataSelectors.selectAppData(AppData.casks, {
    searchAttributes: [
      Cask.caskNumber,
      Cask.name
    ],
    searchParameter: searchParameter,
    attributes: [
      Cask.id,
      Cask.caskNumber,
      Cask.name,
      Cask.flavorProfile
    ],
    limit: 5,
    exclusions: { id: list }
  }));

  return (
    <Column width="full">
      <Column
        // position="relative"
        width="full"
      >
      <InputModule
        inputRef={ ref }
        id="searchCasks"
        type="text"
        name="searchCasks"
        value={ searchParameter }
        label="Casks"
        placeholder="Select a cask..."
        helperText="(optional)"
        onChange={ e => setSearchParameter(e.target.value) }
        onClick={ toggleDropdown }
        width="full"
        mt={ Styles.Spacing.medium }
      />
      { isDropdownOpen && (
        <Row 
          // position="absolute"
          // top="72px"
        >
          <Paper
            width="full"
            padding={ Styles.Spacing.small }
          >
            <List
              componentData={ caskList }
              renderComponent={ cask => (
                <Chip
                  onClick={ () => setList([ ...list, cask.id ]) }
                  color={ cask.flavorProfile }
                  selected={ false }
                  clickable
                  mt={ Styles.Spacing.extraSmall }
                  mr={ Styles.Spacing.extraSmall }
                >
                  <Typography.Body>{ cask.caskNumber } - { cask.name }</Typography.Body>
                  <Icon
                    path={ ASSETS.addIcon } 
                    color={ Styles.Colors.black }
                    size="sm"
                    ml={ Styles.Spacing.small }
                  />
                </Chip>
              )}
            />
          </Paper>
        </Row>
      ) }
      </Column>
      <Column
        width="full"
        // maxHeight="xs"
        // overflow="scroll"
        // size="auto"
        // wrap="no-wrap"
      >
        <ComponentMapping
          componentData={ selectedCasks }
          renderComponent={ cask => (
            <Chip
              onClick={ () => setList(list.filter(id => id !== cask.id)) }
              color={ cask.flavorProfile }
              selected={ true }
              clickable
              mt={ Styles.Spacing.extraSmall }
              mr={ Styles.Spacing.extraSmall }
            >
              <Typography.Body
                overflow
                mt={ Styles.Spacing.extraSmall }
                mr={ Styles.Spacing.small }
                mb={ Styles.Spacing.extraSmall }
                ml={ Styles.Spacing.extraSmall }
              >{ cask.caskNumber } - { cask.name }</Typography.Body>
              <Icon 
                path={ ASSETS.closeIcon } 
                size="sm"
                ml={ Styles.Spacing.small }
                color={ Styles.Colors.black }
              />
            </Chip>
          ) }
        />
      </Column>
      <Row
        justifyContent={ Styles.Layout.JustifyContent.spaceBetween }
        alignItems={ Styles.Layout.AlignItems.center }
        width="full"
        mt={ Styles.Spacing.medium }
      >
        <Button
          onClick={ () => {
            decrementStep();
            dispatchToForm({ casks: list });
          } }
        >Back</Button>
        <Button
          onClick={ () => {
            incrementStep();
            dispatchToForm({ casks: list });
          } }
        >Next</Button>
      </Row>
    </Column>
  );
};

export default DetailsStep;
