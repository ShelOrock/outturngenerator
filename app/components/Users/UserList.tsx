//Dependency Libraries
import * as React from 'react';
const { useState, useEffect } = React;
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//Dependency Functions
import { useTypedSelector, createButton } from '../../utils';

//Components
import PageHeaderManager from '../Header/PageHeaderManager';
import ButtonManager from '../Button/ButtonManager';
import FilterMenuManager from '../FilterMenu/FilterMenuManager';
import SelectManager from '../Select/SelectManager';
import UserListItem from './UserListItem';
//Styled Components
import * as StyledComponents from '../styledcomponents';
const {
  StyledDiv: { PaddedDiv, Row, Column },
  StyledCask: { List },
} = StyledComponents

//Redux actions
import * as actions from '../../redux/actions';
const {
  filterActions: { removeFilter, resetFilters },
  searchActions: { setSearch, resetSearch },
} = actions;

//Redux thunks
import * as thunks from '../../redux/thunks';
const { usersThunks: { getAllUsers } } = thunks;

//Types
import {
  SubNavigationPropTypes,
  ToolbarPropTypes,
  PageHeaderPropTypes,
  ButtonProps,
  SelectPropTypes,
} from '../../types';
import SearchManager from '../SearchManager/SearchManager';

export default () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const [ sort, setSort ] = useState('A-Z')
  const [ isOpen, setIsOpen ] = useState(false);
  const {
    allUsers,
    activeUser,
    filters,
    search,
  } = useTypedSelector(state => state)

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(resetFilters());
  }, []);
  useEffect(() => {
    dispatch(getAllUsers(sort, filters))
  }, [sort, filters]);
  useEffect(() => {
    dispatch(setSearch(allUsers))
  }, [allUsers])
  useEffect(() => {
    if(!activeUser.loggedIn || activeUser.loggedIn == 'Offline') history.push('/')
  }, [activeUser])

  const subNavigationProps: SubNavigationPropTypes = {
    link: '/',
    destination: '< Back',
  }

  const toolbarProps: ToolbarPropTypes = {
    pageTitle: 'Users',
    addButtonProps: null,
    deleteButtonProps: null
  }

  const pageHeaderProps: PageHeaderPropTypes = {
    subNavigationProps,
    toolbarProps,
  };

  const sortUsersSelectProps: SelectPropTypes = {
    selectValue: sort,
    label: '',
    onChange: (e) => setSort(e.target.value),
    width: 'auto',
    options: [
      {
        value: 'A-Z',
        name: 'A-Z'
      },
      {
        value: 'Z-A',
        name: 'Z-A'
      },
      {
        value: 'newest',
        name: 'Newest'
      },
      {
        value: 'oldest',
        name: 'Oldest'
      }
    ]
  }

  const filterItems = [ 'Admin', 'Standard', 'Unconfirmed', 'Online', 'Offline' ]

  const resetFilterButtonProps: ButtonProps = {
    variant: 'tertiary',
    disabled: !filters.length,
    onClick: createButton(
      resetFilters,
      'X Clear Filters',
    )
  }

  const searchManagerProps = {
    placeholder: 'Search Users',
    searchSet: allUsers,
    firstCriteria: 'username'
  }

  const setIsOpenButtonProps: ButtonProps = {
    size: 'default',
    variant: 'default',
    dispatchToStore: false,
    onClick: createButton(
      setIsOpen,
      isOpen ? 'Collapse Filters' : 'Show Filters',
      !isOpen
    )
  }

  const renderfilters = (): JSX.Element[] => (
    filters.map((filter: string, idx: number) => (
      <ButtonManager 
        key={ idx }
        variant='default'
        onClick={ createButton(
          removeFilter,
          `X ${ filter }`,
          filter
        ) }
      />
    ))
  )

  const renderUserListItems = () => (
    search.map(user => {
      return <UserListItem
        key={ user.id }
        user={ user }
        sortMethod={ sort }
      />
    })
  );

  return (
    <Column>
      <PageHeaderManager { ...pageHeaderProps } />
      <Row justifyContent='space-between'>
          <PaddedDiv
            paddingLeft='1rem'
            paddingRight='1rem'
          >
            <SelectManager { ...sortUsersSelectProps } />
          </PaddedDiv>
        <Row alignItems='center'>
          { !!filters.length && renderfilters() }
          { !!filters.length && < ButtonManager { ...resetFilterButtonProps } /> }
          <ButtonManager { ...setIsOpenButtonProps } />
        </Row>
        { isOpen && <FilterMenuManager filterItems={ filterItems } /> }
      </Row>
      <Row>
        <PaddedDiv
          paddingLeft='1rem'
          paddingRight='1rem'
        >
          <SearchManager { ...searchManagerProps } />
        </PaddedDiv>
      </Row>
      <List>
        { !!allUsers.length && renderUserListItems() }
      </List>
    </Column>
  )
};