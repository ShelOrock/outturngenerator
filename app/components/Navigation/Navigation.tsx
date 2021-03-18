import * as React from 'react';
import { useTypedSelector } from '../../utils';

import ButtonManager from '../Button/ButtonManager';
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledNavigation: { NavBar, NavLink },
  StyledDiv: { Row },
} = StyledComponents;

import * as thunks from '../../redux/thunks';
const { authenticationThunks: { attemptUserLogout } } = thunks;

import { createButton } from "../../buttonProps";

export default () => {

  const { user } = useTypedSelector(state => state);

  return (
    <NavBar>
      <Row justifyContent='space-between'>
        <Row>
          <NavLink to='/'>Projects</NavLink>
          <NavLink to='/casks'>Casks</NavLink>
        </Row>
        {
          user.loggedIn
          ? <ButtonManager
            dispatchToStore={ true }
            onClickFunctionProps={ createButton(attemptUserLogout, 'Logout', user.id) }
            />
          : <NavLink to='/login'>Login</NavLink>
        }
      </Row>
    </NavBar>
  )
};