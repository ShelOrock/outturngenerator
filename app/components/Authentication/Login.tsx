import * as React from 'react';
const { useState, useEffect } = React;
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../utils';

import * as StyledComponents from '../styledcomponents/index';
const {
  StyledForm: {
    FormContainer,
    InputModule,
    InputLabel,
    InputField
  },
  StyledButton: { Button }
} = StyledComponents;

import * as thunks from '../../redux/thunks';
const { authenticationThunks: { attemptUserLogin } } = thunks;

import { InputOnChangeType } from '../../types/index';

export default () => {

  const [ localState, setLocalState ] = useState({
    usernameOrEmail: '',
    password: ''
  })
  const { usernameOrEmail, password } = localState;

  const { user } = useTypedSelector(state => state);

  const dispatch = useDispatch();
  const history = useHistory();
  
  useEffect(() => {
    if(user.loggedIn) history.push('/')
  }, [user])

  const handleOnChange: InputOnChangeType = ({ target: { name, value } } ) => {
    setLocalState({
      ...localState,
      [name]: value
    })
  }

  return (
    <FormContainer>
      <InputModule>
        <InputLabel>Username or Email</InputLabel>
        <InputField
          type='text'
          name='usernameOrEmail'
          value={ usernameOrEmail }
          onChange={ handleOnChange }
        />
      </InputModule>

      <InputModule>
        <InputLabel>Password</InputLabel>
        <InputField
          type='password'
          name='password'
          value={ password }
          onChange={ handleOnChange }
        />
      </InputModule>

      <Button variant='primary' onClick={ () => dispatch(attemptUserLogin({ usernameOrEmail, password })) }>Login</Button>
    </FormContainer>
  )
}