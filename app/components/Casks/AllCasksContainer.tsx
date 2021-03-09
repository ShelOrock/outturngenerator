import * as React from 'react';
const { useEffect, useState } = React;
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../utils';

import PageHeader from '../Header/PageHeader';
import FilterMenuToggle from '../FilterMenu/FilterMenuToggle'
import ButtonManager from '../Button/ButtonManager';
import CaskListItem from '../OutturnCasks/CaskListItem';
import ActiveCask from '../OutturnCasks/ActiveCask';
import AssociatedOutturn from './AssociatedOutturn';
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledDiv: { Column, Row },
  StyledButton: { Button },
  StyledForm: { Select },
  StyledCask: { List },
} = StyledComponents;

import * as actions from '../../redux/actions';
const {
  markCaskActions: { resetMarkedCasks },
  searchFilterActions: { removeFilter, resetFilters }
} = actions;

import * as thunks from '../../redux/thunks';
const { casksThunks: { getCasks } } = thunks;

import { createCaskModal, deleteManyCasksModal } from '../../modalProps';
import { createModalButton, createButton } from '../../buttonProps';

export default () => {

  const dispatch = useDispatch();
  const [ sort, setSort ] = useState('ascending');
  const [ showMore, setShowMore ] = useState(12);
  const {
    allCasks,
    activeCask,
    markedCasks,
    isLoading,
    searchFilters,
  } = useTypedSelector(state => state);
  
  useEffect(() => { dispatch(resetMarkedCasks()) }, [])

  useEffect(() => { dispatch(getCasks(sort, searchFilters)) }, [sort]);

  return (
    <div>
      <PageHeader
        subNavigationProps={ {
          link: '/',
          destination: ''
        } }
        toolbarProps={ { 
          pageTitle: 'All Casks',
          addButtonProps: {
            variant: 'primary',
            onClickProps: createModalButton('+ Add a cask', createCaskModal(null, sort, searchFilters)) 
          },
          deleteButtonProps: {
            variant: 'secondary',
            disabled: !markedCasks.length,
            onClickProps: createModalButton('X Delete Marked Casks', deleteManyCasksModal(markedCasks, activeCask, null, sort))
          }
        } }
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
              props={ createButton(removeFilter, `X ${ filter }`, filter) }
            />
          ))
          : null
        }
        <ButtonManager 
          variant='tertiary'
          disabled={ !searchFilters.length }
          props={ createButton(resetFilters, 'X Clear Filters') }
        />
        </Row>
      </Row>
      <FilterMenuToggle sortMethod={ sort }/>
        <List>
          {
            allCasks.length
          ? allCasks.slice(0, showMore).map(cask => <CaskListItem key={ cask.id } cask={ cask } sortMethod={ sort }/>)
          : null
          }
          {
            showMore < allCasks.length
          ? <Button
              size='default'
              variant='secondary'
              disabled={ !!isLoading }
              onClick={ () => setShowMore(showMore + 6) }
            >Show More</Button>
          : null
          }
        </List>
      <Column>
        <ActiveCask />
        <AssociatedOutturn />
      </Column>
  </div>
  )
}