import React, { useState } from "react"; 

import Paper from "../Paper";
import Column from "../LayoutComponents/Column";
import * as Typography from "../Typography";
import Grid from "../Grid";
import Chip from "../Chip";
import IconButton from "../IconButton"

import { utilityFunctions } from "../../utilities";
import ASSETS from "../../assets";

import { ComponentProps } from "./types";

import { Styles, Filters } from "../../enums";

const CasksFilters: React.FC<ComponentProps> = ({
  filters,
  handleOnClick,
}) => {

  const [ filtersIsOpen, setFiltersIsOpen ] = useState(false);

  return (
    <Column alignItems={ Styles.Layout.AlignItems.flexEnd }>
      <IconButton
        path={ ASSETS.filterIcon }
        onClick={ () => setFiltersIsOpen(!filtersIsOpen) }
        variant={ Styles.ButtonVariants.secondary }
        color={ Styles.Colors.primary }
      >Filters</IconButton>
      { filtersIsOpen && (
        <Paper
          position="absolute"
          width="md"
          mt={ Styles.Spacing.large }
          padding={ Styles.Spacing.medium }
        >
          <Typography.Heading>Filter by</Typography.Heading>
          <Typography.Subheading>Flavor Profile</Typography.Subheading>
          <Grid
            componentData={ utilityFunctions.FLAVOR_PROFILES }
            renderComponent={ ({ flavorProfile }) => (
              <Chip
                onClick={ () => handleOnClick(Filters.flavorProfile, { filter: flavorProfile }) }
                color={ flavorProfile }
                selected={ filters.flavorProfile?.includes(flavorProfile) }
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
                >{ flavorProfile }</Typography.Body>
              </Chip>
            ) }
            size="none"
          />
          <Typography.Subheading mt={ Styles.Spacing.small }>Region</Typography.Subheading>
          <Grid
            componentData={ utilityFunctions.REGIONS }
            renderComponent={ ({ region }) => (
              <Chip
                onClick={ () => handleOnClick(Filters.region, { filter: region }) }
                color={ Styles.Colors.primary }
                selected={ filters.region?.includes(region) }
                clickable
                mt={ Styles.Spacing.extraSmall }
                mr={ Styles.Spacing.extraSmall }
              >{ region }</Chip>
            ) }
          />
        </Paper>
      ) }
    </Column>
  );
};

export default CasksFilters;
