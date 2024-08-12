import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector, usePagination } from "../hooks";

import { TwoColumnTemplate } from "../components/Templates";

import Grid from "../components/Grid";
import Input from "../components/Input";
import Column from "../components/LayoutComponents/Column";
import Link from "../components/Link";
import Pagination from "../components/Pagination";
import Navigation from "../components/Navigation";
import Button from "../components/Button";
import CreateOutturnDialog from "../Dialogues/CreateOutturnDialog";
import OutturnCard from "../components/OutturnCard";

import { appDataSelectors } from "../redux/selectors";
import { dialogActions, filterActions } from "../redux/actions";

import { AppData, Outturn } from "../enums";

interface ComponentProps {};

const OutturnsPage: React.FC<ComponentProps> = () => {

  const dispatch = useAppDispatch();

  const [ searchParameter, setSearchParameter ] = useState("");

  useEffect(() => {
    dispatch(dialogActions.resetDialog());
    dispatch(filterActions.resetFilters())
  }, []);

  const attributes = [
    Outturn.id,
    Outturn.name,
    Outturn.description,
  ];
  
  const outturns = useAppSelector(appDataSelectors.selectAppData(AppData.outturns, {
    searchAttributes: [ Outturn.name ],
    searchParameter,
    attributes,
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
  } = usePagination(outturns, { resultsPerPage: 12 });

  return (
    <TwoColumnTemplate
      heading="Outturns"
      sidebar={ <Navigation /> }
      mainContent={
        <Column width="full">
          <Input
            id="searchParameter"
            type="text"
            name="searchParameter"
            value={ searchParameter }
            onChange={ e => {
              resetPage();
              setSearchParameter(e.target.value);
            } }
            placeholder="Search Outturns"
            width="xl"
          />
          <Grid
            componentData={ paginatedResults }
            renderComponent={ ({
              id,
              name = "",
              description = "",
            }) => (
              <Link to={ `/outturns/${ id }`}>
                <OutturnCard 
                  id={ id }
                  name={ name }
                  description={ description }
                />
              </Link>
            ) }
            mt="sm" mb="sm"
            size={ 1 }
          />
          <Pagination 
            pages={ pages }
            activePage={ activePage }
            totalPages={ totalPages }
            lowerBound={ lowerBound }
            upperBound={ upperBound }
            allResults={ outturns.length }
            setActivePage={ setActivePage }
            incrementPage={ incrementPage }
            decrementPage={ decrementPage }
          />
          <Button onClick={ () => dispatch(dialogActions.setDialog(<CreateOutturnDialog />)) }>+ Add New Outturn</Button>
        </Column>
      }
    />
  );
};

export default OutturnsPage;
