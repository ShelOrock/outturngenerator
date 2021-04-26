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
const { searchFilterActions: { removeFilter, resetFilters } } = actions;

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

export default () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const [ sort, setSort ] = useState('A-Z')
  const [ isOpen, setIsOpen ] = useState(false);
  const {
    allUsers,
    activeUser,
    searchFilters,
  } = useTypedSelector(state => state)

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(resetFilters());
  }, []);
  useEffect(() => {
    dispatch(getAllUsers(sort, searchFilters))
  }, [sort, searchFilters]);
  useEffect(() => {
    if(activeUser.loggedIn == 'Offline') history.push('/')
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

  const filters = [ 'Admin', 'Standard', 'Unconfirmed', 'Online', 'Offline' ]

  const resetFilterButtonProps: ButtonProps = {
    variant: 'tertiary',
    disabled: !searchFilters.length,
    onClick: createButton(
      resetFilters,
      'X Clear Filters',
    )
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

  const renderSearchFilters = (): JSX.Element[] => (
    searchFilters.map((filter: string, idx: number) => (
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
    allUsers.map(user => {
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
          { !!searchFilters.length && renderSearchFilters() }
          { !!searchFilters.length && < ButtonManager { ...resetFilterButtonProps } /> }
          <ButtonManager { ...setIsOpenButtonProps } />
        </Row>
        { isOpen && <FilterMenuManager filters={ filters } /> }
      </Row>
      <List>
        { !!allUsers.length && renderUserListItems() }
      </List>
    </Column>
  )
};