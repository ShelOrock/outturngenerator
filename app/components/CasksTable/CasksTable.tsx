import React from "react";

import CaskRow from "../Cask";

import Table from "../TableComponents/Table";
import { Row } from "../LayoutComponents";
import * as Typography from "../Typography";
import IconButton from "../IconButton";

import ASSETS from "../../assets";

import { Styles, Cask, SortDirections } from "../../enums";

import { ComponentProps } from "./types";


const CasksTable: React.FC<ComponentProps> = ({
  sortAttribute,
  sortDirection,
  setSortDirection,
  setSortAttribute,
  listOrder,
  isListReordered,
  handleOnDragEnd
}) => (
  <Table
    headerData={ [
      { id: 0, data: (
      <Row alignItems={ Styles.Layout.AlignItems.center }>
        <Typography.Body
          weight={ Styles.FontWeights.bold }
          mr={ Styles.Spacing.extraSmall }
        >Position</Typography.Body>
          <IconButton
            variant={ Styles.ButtonVariants.tertiary }
            path={ sortDirection === SortDirections.ascending ? ASSETS.expandLessIcon : ASSETS.expandMoreIcon }
            onClick={ () => {
              setSortAttribute(Cask.caskPosition);
              sortDirection === SortDirections.ascending ? setSortDirection(SortDirections.descending) : setSortDirection(SortDirections.ascending);
            } }
            disabled={ isListReordered }
          />
        </Row>
      ) },
      { id: 1, data: (
        <Row alignItems={ Styles.Layout.AlignItems.center }>
          <Typography.Body
            weight={ Styles.FontWeights.bold }
            mr={ Styles.Spacing.extraSmall }
          >Cask Number</Typography.Body>
          <IconButton
            variant={ Styles.ButtonVariants.tertiary }
            path={ sortDirection === SortDirections.ascending ? ASSETS.expandLessIcon : ASSETS.expandMoreIcon }
            onClick={ () => {
              setSortAttribute(Cask.caskNumber);
              sortDirection === SortDirections.ascending ? setSortDirection(SortDirections.descending) : setSortDirection(SortDirections.ascending);
            } }
            disabled={ isListReordered }
          />
        </Row>
      ) }, 
      { id: 2, data: (
        <Typography.Body
          weight={ Styles.FontWeights.bold }
          mr={ Styles.Spacing.extraSmall }
        >Name</Typography.Body>
      ) },
      { id: 3, data: (
        <Row alignItems={ Styles.Layout.AlignItems.center }>
          <Typography.Body
            weight={ Styles.FontWeights.bold }
            mr={ Styles.Spacing.extraSmall }
          >Price</Typography.Body>
          <IconButton
            variant={ Styles.ButtonVariants.tertiary }
            path={ sortDirection === SortDirections.ascending ? ASSETS.expandLessIcon : ASSETS.expandMoreIcon }
            onClick={ () => {
              setSortAttribute(Cask.price);
              sortDirection === SortDirections.ascending ? setSortDirection(SortDirections.descending) : setSortDirection(SortDirections.ascending)
            } }
            disabled={ isListReordered }
          />
        </Row>
      ) },
      { id: 4, data: (
        <Typography.Body
          weight={ Styles.FontWeights.bold }
          mr={ Styles.Spacing.extraSmall }
        >Region</Typography.Body> 
      ) },
      { id: 5, data: (
        <Row alignItems={ Styles.Layout.AlignItems.center }>
          <Typography.Body 
            weight={ Styles.FontWeights.bold }
            mr={ Styles.Spacing.extraSmall }
          >Age</Typography.Body>
          <IconButton
            variant={ Styles.ButtonVariants.tertiary }
            path={ sortDirection === SortDirections.ascending ? ASSETS.expandLessIcon : ASSETS.expandMoreIcon }
            onClick={ () => {
              setSortAttribute(Cask.age);
              sortDirection === SortDirections.ascending ? setSortDirection(SortDirections.descending) : setSortDirection(SortDirections.ascending);
            } }
            disabled={ isListReordered }
          />
        </Row>
      ) },
      { id: 6, data: (
        <Typography.Body
          weight={ Styles.FontWeights.bold }
          mr={ Styles.Spacing.extraSmall }
        >Flavor</Typography.Body>
      ) },
      { id: 7, data: (
        <Typography.Body
          weight={ Styles.FontWeights.bold }
          mr={ Styles.Spacing.extraSmall }
        >Actions</Typography.Body> 
      ) }
    ] }
    bodyData={ listOrder }
    bodyRenderComponent={ data => <CaskRow { ...data } /> }
    handleOnDragEnd={ handleOnDragEnd }
  />
);

export default CasksTable;
