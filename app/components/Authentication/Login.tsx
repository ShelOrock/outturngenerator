import * as React from 'react';
const { useState, useEffect } = React;
import { useHistory } from 'react-router-dom';
import { useTypedSelector } from '../../utils';

import InputForm from '../Form/InputForm';
import * as StyledComponents from '../styledcomponents/index';
import ButtonManager from '../Button/ButtonManager';
const {
  StyledForm: {
    LoginFormContainer,
    InputModule,
    InputLabel,
    InputField
  },
} = StyledComponents;

import * as thunks from '../../redux/thunks';
const { authenticationThunks: { attemptUserLogin } } = thunks;

import { createButton } from '../../buttonProps';

import { InputOnChangeType } from '../../types/index';

import { loginInputProps } from '../../inputProps'

export default () => {

  const [ localState, setLocalState ] = useState({
    usernameOrEmail: '',
    password: ''
  })
  const { usernameOrEmail, password } = localState;

  const { user } = useTypedSelector(state => state);

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
    <LoginFormContainer>
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

      <ButtonManager
        dispatchToStore={ true }
        onClickFunctionProps={ createButton(attemptUserLogin, 'Login', { usernameOrEmail, password }) } />
    </LoginFormContainer>
  )
}