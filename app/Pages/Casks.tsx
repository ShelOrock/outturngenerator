import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch, usePagination } from '../hooks';

import { TwoColumnTemplate } from '../components/Templates';

import CreateCaskDialog from "../Dialogues/CreateCaskDialog";

import { Row, Column } from "../components/LayoutComponents";
import Grid from "../components/Grid";
import CasksFilters from "../components/CasksFilters";
import CasksTable from "../components/CasksTable";
import Pagination from "../components/Pagination";
import Input from "../components/Input";
import Button from "../components/Button";
import Navigation from "../components/Navigation";
import ASSETS from '../assets';
import IconButton from "../components/IconButton";
 
import { appDataSelectors, filtersSelectors } from '../redux/selectors';
import { dialogActions, filterActions } from "../redux/actions";

import { AppData, Cask, Filters, Styles } from "../enums";


interface ComponentProps {};

const CasksPage: React.FC<ComponentProps> = () => {

  const dispatch = useAppDispatch();

  const [ searchCasks, setSearchCasks ] = useState("");
  const [ sortAttribute, setSortAttribute ] = useState("caskPosition");
  const [ sortDirection, setSortDirection ] = useState("ascending");

  const attributes = [
    Cask.id,
    Cask.caskNumber,
    Cask.name,
    Cask.price,
    Cask.region,
    Cask.age,
    Cask.flavorProfile
  ];

  const filters = useAppSelector(filtersSelectors.selectFilters);
  const casks = useAppSelector(appDataSelectors.selectAppData(AppData.casks, {
    filters,
    searchAttributes: [
      Cask.caskNumber,
      Cask.name,
      Cask.region,
      Cask.flavorProfile
    ],
    searchParameter: searchCasks,
    attributes,
    sortAttribute,
    sortDirection
  }));

  const {
    paginatedResults,
    pages,
    activePage,
    totalPages,
    lowerBound,
    upperBound,
    setActivePage,
    incrementPage,
    decrementPage,
    resetPage
  } = usePagination(casks, {
    dependencies: [
      filters,
      sortAttribute,
      sortDirection
    ]
  });

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

  return (
    <TwoColumnTemplate
      heading="Casks"
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
              onChange={ e => {
                resetPage();
                setSearchCasks(e.target.value);
              } }
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
                componentData={ filters.flavorProfile || [] }
                renderComponent={ filter => (
                  <IconButton
                    path={ ASSETS.closeIcon } 
                    onClick={ () => handleOnClick(filters.flavorProfiles, { filter }) }
                    variant={ Styles.ButtonVariants.tertiary }
                    color={ filter }
                    mt={ Styles.Spacing.extraSmall }
                    mr={ Styles.Spacing.extraSmall }
                  >{ filter }</IconButton>
                ) }
                mt="sm"
              />
            </Row>
            <Row>
              <Grid
                componentData={ filters.region || [] }
                renderComponent={ filter => (
                  <IconButton 
                    onClick={ () => handleOnClick(Filters.region, { filter }) }
                    path={ ASSETS.closeIcon } 
                    variant={ Styles.ButtonVariants.tertiary }
                    color={ Styles.Colors.primary }
                    mt={ Styles.Spacing.extraSmall }
                    mr={ Styles.Spacing.extraSmall }
                  >{ filter }</IconButton>
                ) }
                mt="sm"
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
              listOrder={ [] }
              isListReordered={ false }
              handleOnDragEnd={ () => {} }
            />
            <Pagination
              pages={ pages }
              activePage={ activePage }
              totalPages={ totalPages }
              lowerBound={ lowerBound }
              upperBound={ upperBound }
              allResults={ casks.length }
              setActivePage={ setActivePage }
              incrementPage={ incrementPage }
              decrementPage={ decrementPage }
            />
          </Column>
          <Button onClick={ () => dispatch(dialogActions.setDialog(<CreateCaskDialog isEditing/>)) }>+ Add New Cask</Button>
        </Column>
      }
    />
  );
};

export default CasksPage;
