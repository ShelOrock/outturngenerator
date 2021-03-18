import * as React from 'react';
const { useEffect, useState } = React;
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../utils';

import PageHeader from '../Header/PageHeader';
import FilterMenu from '../FilterMenu/FilterMenu';

import ButtonManager from '../Button/ButtonManager';
import CaskListItem from '../OutturnCasks/CaskListItem';
import ActiveCask from '../OutturnCasks/ActiveCask';
import AssociatedOutturn from './AssociatedOutturn';
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledDiv: { Column, Row },
  StyledForm: { Select },
  StyledCask: { List },
} = StyledComponents;

import * as actions from '../../redux/actions';
const {
  activeCaskActions: { resetActiveCask },
  markCaskActions: { resetMarkedCasks },
  searchFilterActions: { removeFilter, resetFilters }
} = actions;

import * as thunks from '../../redux/thunks';
const { casksThunks: { getCasks } } = thunks;

import { createCaskModal, deleteManyCasksModal } from '../../modalProps';
import { createModalButton, createButton } from '../../buttonProps';
import { AllCaskContainerPageHeaderProps } from '../../pageHeaderProps';

export default () => {

  const dispatch = useDispatch();
  const [ sort, setSort ] = useState('ascending');
  const [ showMore, setShowMore ] = useState(12);
  const [ isOpen, setIsOpen ] = useState(false);

  const {
    allCasks,
    activeCask,
    markedCasks,
    isLoading,
    searchFilters,
  } = useTypedSelector(state => state);
  
  useEffect(() => { 
    dispatch(resetActiveCask())
    dispatch(resetMarkedCasks())
    dispatch(resetFilters())
  }, [])

  useEffect(() => { dispatch(getCasks(sort, searchFilters)) }, [sort, searchFilters]);

  return (
    <div>
      <PageHeader
        { ...AllCaskContainerPageHeaderProps({
          createModalButton,
          createCaskModal,
          sort,
          searchFilters,
          markedCasks,
          deleteManyCasksModal,
          activeCask,
        }) }
      />
      <Row justifyContent='space-between'>
        <Select id='sortBy' name='sortBy' value={ sort } onChange={ e => setSort(e.target.value) }>
          <option value='ascending'>Ascending</option>
          <option value='descending'>Descending</option>
          <option value='newest'>Newest</option>
          <option value='oldest'>Oldest</option>
        </Select>
        <Row>
        {
          searchFilters.length
          ? searchFilters.map((filter, idx) => (
            <ButtonManager
              key={ idx }
              variant={ filter.toString() }
              onClickFunctionProps={ createButton(removeFilter, `X ${ filter }`, filter) }
            />
          ))
          : null
        }
        {
          searchFilters.length
          ? <ButtonManager 
            variant='tertiary'
            disabled={ !searchFilters.length }
            onClickFunctionProps={ createButton(resetFilters, 'X Clear Filters') }
          />
          : null
        }
        <div>
          <ButtonManager
            size='default'
            variant='default'
            dispatchToStore={ true }
            onClickFunctionProps={ createButton(setIsOpen, isOpen ? 'Collapse Filters' : 'Show Filters', !isOpen) }
          />{ isOpen ? 'Collapse Filters' : 'Show Filters' }
          {
            isOpen
            ? <FilterMenu />
            : null
          }
        </div>
        </Row>
      </Row>
      <Row>
      <List>
        {
          allCasks.length
        ? allCasks.slice(0, showMore).map(cask => <CaskListItem key={ cask.id } cask={ cask } sortMethod={ sort }/>)
        : null
        }
        {
          showMore < allCasks.length
        ? <ButtonManager
            size='default'
            variant='secondary'
            disabled={ !!isLoading }
            dispatchToStore={ false }
            onClickFunctionProps={ createButton(setShowMore, 'Show More', showMore + 6) }
          />
        : null
        }
      </List>
      <Column>
        <ActiveCask />
        <AssociatedOutturn />
      </Column>
      </Row>
  </div>
  )
}