//Depedency Libraries
import * as React from 'react';
//Dependency Functions
import { useTypedSelector, createButton} from '../../utils';

//Components
import ButtonManager from '../Button/ButtonManager';
//StyledComponents
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledNavigation: { NavBar, NavLink },
  StyledDiv: { Row },
} = StyledComponents;

//Redux Thunks
import * as thunks from '../../redux/thunks';
const { authenticationThunks: { attemptUserLogout } } = thunks;

//Types
import { AttemptUserLogoutButtonPropTypes } from '../../types';

export default () => {

  const { activeUser } = useTypedSelector(state => state);
  
  const attemptUserLogoutButtonProps: AttemptUserLogoutButtonPropTypes = {
    size: 'small',
    dispatchToStore: true,
    onClick: createButton(
      attemptUserLogout,
      'Logout',
      activeUser.id
    )
  }

  const evaluateUserAccess = activeUser.loggedIn == 'Online'
  ? activeUser.userType == 'Admin' 
    ? <NavLink to='/users'>Users</NavLink>
    : null
  : <NavLink to='signup'>Sign up</NavLink>

  const evaluateLoginLogout = activeUser.loggedIn == 'Online'
  ? <ButtonManager { ...attemptUserLogoutButtonProps } />
  : <NavLink to='/login'>Login</NavLink>

  return (
    <NavBar>
      <Row justifyContent='space-between' alignItems='center'>
        <Row>
          <NavLink to='/'>Projects</NavLink>
          <NavLink to='/casks'>Casks</NavLink>
        </Row>
        <Row alignItems='center'>
          { evaluateUserAccess }
          { evaluateLoginLogout }
        </Row>
      </Row>
    </NavBar>
  )
};