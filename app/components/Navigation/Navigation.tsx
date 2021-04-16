import * as React from 'react';
import { useTypedSelector, createButton} from '../../utils';

import ButtonManager from '../Button/ButtonManager';
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledNavigation: { NavBar, NavLink },
  StyledDiv: { Row },
} = StyledComponents;

import * as thunks from '../../redux/thunks';
const { authenticationThunks: { attemptUserLogout } } = thunks;

import { AttemptUserLogoutButtonPropTypes } from '../../types';

export default () => {

  const { user } = useTypedSelector(state => state);
  
  const attemptUserLogoutButtonProps: AttemptUserLogoutButtonPropTypes = {
    dispatchToStore: true,
    onClickFunctionProps: createButton(attemptUserLogout, 'Logout', user.id)
  }

  return (
    <NavBar>
      <Row justifyContent='space-between'>
        <Row>
          <NavLink to='/'>Projects</NavLink>
          <NavLink to='/casks'>Casks</NavLink>
        </Row>
        {
          user.loggedIn
          ? <ButtonManager { ...attemptUserLogoutButtonProps } />
          : <NavLink to='/login'>Login</NavLink>
        }
      </Row>
    </NavBar>
  )
};