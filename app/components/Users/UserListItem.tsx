//Dependency Libraries
import * as React from 'react';
const { useEffect, useState } = React;
//Dependency Functions
import { useTypedSelector, createButton } from '../../utils';

//Components
import SelectManager from '../Select/SelectManager';
import ButtonManager from '../Button/ButtonManager';
//Styled Components
import * as StyledComponents from '../styledcomponents';
const {
  StyledType: { Body },
  StyledDiv: {
    PaddedDiv,
    Column,
    Row
  },
  StyledCask: { ListItem },
  StyledPill: { OnlineIcon }
} = StyledComponents;

//Redux actions
import * as actions from '../../redux/actions';
const { modalActions: { setModal } } = actions;

//Redux thunks
import * as thunks from '../../redux/thunks';
const { usersThunks: { editUser, deleteUser } } = thunks;

//Types
import {
  ButtonProps,
  Modal,
  SelectPropTypes
} from '../../types';

export default ({ user, sortMethod }) => {

  const [ selectValue, setSelectValue ] = useState(user.userType)
  const [ isEdited, setIsEdited ] = useState(false)
  const { activeUser, searchFilters } = useTypedSelector(state => state)

  useEffect(() => { checkIsEdited(user.userType, selectValue) }, [user.userType, selectValue]);

  const evaluateUserIsActive = activeUser.id !== user.id
  const evaluateUserType = user.userType !== 'Admin';

  const changeAuthorizationButtonProps: ButtonProps = {
    size: 'small',
    disabled: !isEdited,
    onClick: createButton(
      editUser,
      'Update Authorization',
      user.id,
      { userType: selectValue },
      sortMethod,
      searchFilters
    )
  }

  const selectAuthorizationProps: SelectPropTypes = {
    label: '',
    width: '150px',
    disabled: !evaluateUserIsActive,
    selectValue,
    onChange: (e) => setSelectValue(e.target.value),
    options: [
      {
        name: 'Unconfirmed',
        value: 'Unconfirmed'
      },
      {
        name: 'Standard',
        value: 'Standard',
      },
      {
        name: 'Admin',
        value: 'Admin'
      }
    ]
  };

  const checkIsEdited = (previousState: typeof user.userType, currentState: typeof selectValue) => {
    setIsEdited(false);
    if(previousState !== currentState) setIsEdited(true);
  };

  const deleteUserModal: Modal = {
    modalHeader: `Are you sure you want to delete ${ user.username || 'this user' }?`,
    confirmButton: {
      text: `Delete ${ user.username || 'this user' }`,
      arguments: [ user.id, sortMethod, searchFilters ],
      onClick: deleteUser,
    }
  }

  const deleteUserButtonProps: ButtonProps = {
    size: 'small',
    variant: 'tertiary',
    onClick: createButton(
      setModal,
      'X Delete',
      deleteUserModal
    )
  }

  return (
    <ListItem>
      <Column>
        <Row justifyContent='space-between'>
          <PaddedDiv paddingLeft='1rem' paddingTop='1rem' paddingBottom='1rem'>
            <Row alignItems='center'>
              <OnlineIcon variant={ user.loggedIn == 'Online' ? 'primary' : 'gray' } />
              <Body color={ user.loggedIn =='Online' ? 'black' : 'gray' }>{ user.loggedIn == 'Online' ? 'Online' : 'Offline' }</Body>
            </Row>
          </PaddedDiv>
          { evaluateUserIsActive && evaluateUserType && <ButtonManager { ...deleteUserButtonProps }/> }
        </Row>
        <Column justifyContent='space-between'>
          <Body>{ user.username }</Body>
          <Row justifyContent='space-between' alignItems='center'>
            { <SelectManager { ...selectAuthorizationProps }/> }
            { evaluateUserIsActive && <ButtonManager { ...changeAuthorizationButtonProps } /> }
          </Row>
        </Column>
      </Column>
    </ListItem>
  )
}