import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector, useReorderList, useSerializeData } from "../hooks";

import { TwoColumnTemplate } from "../components/Templates";
import Chip from "../components/Chip";
import Input from "../components/Input";
import { Row, Column } from "../components/LayoutComponents";
import Grid from "../components/Grid";
import ASSETS from '../assets';
import Icon from "../components/Icon";
import Button from "../components/Button";
import CreateCaskDialog from "../Dialogues/CreateCaskDialog";
import Navigation from "../components/Navigation";
import CasksTable from "../components/CasksTable";
import CasksFilters from "../components/CasksFilters";
import * as Typography from "../components/Typography";
import OutturnPreview from "../Dialogues/OutturnPreview";

import { entitiesActions, filterActions, dialogActions } from "../redux/actions";
import { appDataSelectors, filtersSelectors } from "../redux/selectors";

import { AppData, Outturn, Cask, Filters, SortDirections, Styles } from "../enums";

interface ComponentProps {};

const ActiveOutturn: React.FC<ComponentProps> = () => {

  const dispatch = useAppDispatch();

  const { id } = useParams();

  const [ searchCasks, setSearchCasks ] = useState("");
  const [ sortAttribute, setSortAttribute ] = useState(Cask.caskPosition);
  const [ sortDirection, setSortDirection ] = useState(SortDirections.ascending);

  useEffect(() => {
    if(id) {
      dispatch(entitiesActions.setActiveEntity(AppData.outturns, id));
    };
  }, [id]);

  const attributes = [
    Cask.id,
    Cask.caskPosition,
    Cask.caskNumber,
    Cask.name,
    Cask.description,
    Cask.price,
    Cask.region,
    Cask.age,
    Cask.flavorProfile
  ];

  const activeOutturn = useAppSelector(appDataSelectors.selectActiveId(AppData.outturns, {
    attributes: [
      Outturn.id,
      Outturn.name,
      Outturn.description
    ]
  }));

  const filters = useAppSelector(filtersSelectors.selectFilters);

  const { serializedData: serializedFlavorProfileFilters } = useSerializeData(filters.flavorProfile, "filter");
  const { serializedData: serializedRegionFilters } = useSerializeData(filters.region, "filter");

  const casks = useAppSelector(appDataSelectors.selectAppData(AppData.casks, {
    filters: { outturnId: activeOutturn.id, ...filters },
    searchAttributes: [
      Cask.caskNumber,
      Cask.name,
      Cask.flavorProfile,
      Cask.region,
    ],
    searchParameter: searchCasks,
    attributes,
    sortAttribute,
    sortDirection,
  }));

  useEffect(() => {
    dispatch(dialogActions.resetDialog());
    dispatch(filterActions.resetFilters())
  }, []);

  const handleOnClick = (type, { filter }) => {
    if(filters[type]?.includes(filter)) {
      dispatch(filterActions.deleteFilter({ type, filter } as any));
      return;
    };

    dispatch(filterActions.addFilter({ type, filter } as any));
    return;
  };

  const {
    listOrder,
    setListOrder,
    isListReordered,
    setIsListReordered,
    handleOnDragEnd
  } = useReorderList(casks);

  return (
    <TwoColumnTemplate
      heading={ activeOutturn.name }
      sidebar={ <Navigation /> }
      mainContent={
        <Column width="full">
          <Row
            justifyContent={ Styles.Layout.JustifyContent.spaceBetween }
            alignItems={ Styles.Layout.AlignItems.center }
            width="full"
          >
            <Input
              id="searchCasks"
              type="text"
              name="searchCasks"
              value={ searchCasks }
              onChange={ e => setSearchCasks(e.target.value) }
              placeholder="Search Casks"
              width="xl"
            />
            <CasksFilters
              filters={ filters }
              handleOnClick={ handleOnClick }
            />
          </Row>
          <Column>
            <Row>
              <Grid
                componentData={ serializedFlavorProfileFilters }
                renderComponent={ ({ filter }) => (
                  <Chip
                    onClick={ () => handleOnClick(Filters.flavorProfile, { filter }) }
                    color={ filter }
                    selected
                    mt={ Styles.Spacing.extraSmall }
                    mr={ Styles.Spacing.extraSmall }
                  >
                    <Row alignItems={ Styles.Layout.AlignItems.center }>
                      <Typography.Body
                        overflow
                        mt={ Styles.Spacing.extraSmall }
                        mr={ Styles.Spacing.small }
                        mb={ Styles.Spacing.extraSmall }
                        ml={ Styles.Spacing.extraSmall }
                      >{ filter }</Typography.Body>
                      <Icon 
                        path={ ASSETS.closeIcon } 
                        size="sm"
                        ml={ Styles.Spacing.small }
                        color={ Styles.Colors.black }
                      />
                    </Row>
                  </Chip>
                ) }
                mt={ Styles.Spacing.small }
              />
            </Row>
            <Row>
              <Grid
                componentData={ serializedRegionFilters }
                renderComponent={ ({ filter }) => (
                  <Chip
                    onClick={ () => handleOnClick(Filters.region, { filter }) }
                    color={ Styles.Colors.primary }
                    selected
                    mt={ Styles.Spacing.small }
                    mr={ Styles.Spacing.extraSmall }
                  >
                    <Row alignItems={ Styles.Layout.AlignItems.center }>
                      <Typography.Body
                        overflow
                        mt={ Styles.Spacing.extraSmall }
                        mr={ Styles.Spacing.small }
                        mb={ Styles.Spacing.extraSmall }
                        ml={ Styles.Spacing.extraSmall }
                      >{ filter }</Typography.Body>
                      <Icon 
                        path={ ASSETS.closeIcon } 
                        size="sm"
                        ml={ Styles.Spacing.small }
                        color={ Styles.Colors.black }
                      />
                    </Row>
                  </Chip>
                ) }
                mt={ Styles.Spacing.small }
              />
            </Row>
          </Column>
          <Column
            width="full"
            mt={ Styles.Spacing.medium }
          >
            <CasksTable
              sortAttribute={ sortAttribute }
              sortDirection={ sortDirection }
              setSortAttribute={ setSortAttribute }
              setSortDirection={ setSortDirection }
              listOrder={ listOrder }
              isListReordered={ isListReordered }
              handleOnDragEnd={ handleOnDragEnd }
            />
          </Column>
          <Row
            justifyContent={ Styles.Layout.JustifyContent.spaceBetween }
            alignItems={ Styles.Layout.AlignItems.center }
            width="full"
            mt={ Styles.Spacing.small }
          >
            <Row>
              <Button onClick={ () => dispatch(dialogActions.setDialog(<CreateCaskDialog />)) } mr="xs">+ Add New Cask</Button>
              <Button onClick={ () => {} } disabled={ !isListReordered } mr="xs">Save Changes</Button>
              <Button
                onClick={ () => {
                  setListOrder(casks);
                  setIsListReordered(false)
                } }
                disabled={ !isListReordered }
              >Reset</Button>
            </Row>
            <Button onClick={ () => dispatch(dialogActions.setDialog(<OutturnPreview name={ activeOutturn.name } description={ activeOutturn.description } casks={ casks }></OutturnPreview>)) }>Preview Outturn</Button>
          </Row>
        </Column>
      }
    />
  );
};

export default ActiveOutturn;
