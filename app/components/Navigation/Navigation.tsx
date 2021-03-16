import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../utils';

import * as StyledComponents from '../styledcomponents/index';
const {
  StyledNavigation: { NavBar, NavLink },
  StyledDiv: { Row },
  StyledButton: { Button }
} = StyledComponents;

import * as thunks from '../../redux/thunks';
const { authenticationThunks: { attemptUserLogout } } = thunks;

export default () => {

  const dispatch = useDispatch();
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
          ? <Button onClick={ () => dispatch(attemptUserLogout(user.id)) }>Logout</Button>
          : <NavLink to='/login'>Login</NavLink>
        }
      </Row>
    </NavBar>
  )
};