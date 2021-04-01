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
  searchFilterActions: { removeFilter, resetFilters },
  activeOutturnActions: { resetActiveOutturn }
} = actions;

import * as thunks from '../../redux/thunks';
const { casksThunks: { getCasks } } = thunks;

import { createModalButton, createButton } from '../../buttonProps';
import { createCaskModal, deleteManyCasksModal } from '../../modalProps';

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
    dispatch(resetActiveCask());
    dispatch(resetMarkedCasks());
    dispatch(resetFilters());
    dispatch(resetActiveOutturn());
  }, [])

  useEffect(() => {
    dispatch(getCasks(sort, searchFilters))
  }, [sort, searchFilters]);

  const pageHeaderProps = {
    subNavigationProps: {
      link: '/',
      destination: '< Back'
    },
    toolbarProps: {
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
    }
  };

  const resetFilterButtonProps = {
    variant: 'tertiary',
    disabled: !searchFilters.length,
    onClickFunctionProps: createButton(resetFilters, 'X Clear Filters') 
  };

  const setIsOpenButtonProps = {
    size: 'default',
    variant: 'default',
    dispatchToStore: false,
    onClickFunctionProps: createButton(setIsOpen, isOpen ? 'Collapse Filters' : 'Show Filters', !isOpen)
  }

  const showMoreButtonProps = {
    size: 'default',
    variant: 'secondary',
    disabled: !!isLoading,
    dispatchToStore: false,
    onClickFunctionProps: createButton(setShowMore, 'Show More', showMore + 6)
  }

  return (
    <div>
      <PageHeader { ...pageHeaderProps } />
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
          ? <ButtonManager { ...resetFilterButtonProps }/>
          : null
        }
        <div>
          <ButtonManager { ...setIsOpenButtonProps }/>
          { isOpen ? <FilterMenu /> : null }
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
        ? <ButtonManager { ...showMoreButtonProps }/>
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