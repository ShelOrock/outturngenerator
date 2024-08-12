import React from "react";

import { Row } from "../LayoutComponents";
import ComponentMapping from "../ComponentMapping";
import Button from "../Button";
import * as Typography from "../Typography";

import { ComponentProps } from "./types";

import { Styles } from "../../enums";


const Pagination: React.FC<ComponentProps> = ({
  pages,
  activePage,
  totalPages,
  lowerBound,
  upperBound,
  allResults,
  setActivePage,
  incrementPage,
  decrementPage,
}) => (
  <Row
    justifyContent={ Styles.Layout.JustifyContent.spaceBetween }
    alignItems={ Styles.Layout.AlignItems.center }
    width="full"
    pr={ Styles.Spacing.small }
    pl={ Styles.Spacing.small }
  >
    <Typography.Body>Showing { lowerBound } - { upperBound } of { allResults }</Typography.Body>
    <Row>
      <Button
        onClick={ () => decrementPage() }
        disabled={ activePage <= 1 }
        variant={ Styles.ButtonVariants.tertiary }
      >&lt; Previous</Button>
      <ComponentMapping
        componentData={ pages }
        renderComponent={ ({ page }) => (
          <Button
            onClick={ () => setActivePage(page) }
            disabled={ page === "..." }
            variant={ activePage === page ? Styles.ButtonVariants.primary : Styles.ButtonVariants.tertiary }
          >{ page }</Button>
        )}
      />
      <Button
        onClick={ () => incrementPage() }
        disabled={ activePage >= totalPages }
        variant={ Styles.ButtonVariants.tertiary }
      >Next &gt;</Button>
    </Row>
  </Row>
);

export default Pagination;
