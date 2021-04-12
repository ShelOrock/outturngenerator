import * as React from 'react';
const { useState, useEffect } = React;
import { useHistory } from 'react-router-dom';
import { useTypedSelector, createButton } from '../../utils';

import InputForm from '../form/InputForm';
import * as StyledComponents from '../styledcomponents/index';
import ButtonManager from '../Button/ButtonManager';
const {
  StyledForm: {
    LoginFormContainer,
  },
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

  const loginFormInputProps = [
    {
      inputProps: [
        {
          label: 'Username or Email',
          type: 'text',
          name: 'usernameOrEmail',
          size: 'large',
          value: usernameOrEmail,
        },
        {
          label: 'Password',
          type: 'password',
          name: 'password',
          size: 'large',
          value: password
        }
      ]
    }
  ]

  const inputFormProps = {
    backLinkButton: {
      link: '#',
      destination: ''
    },
    forwardLinkButton: {
      link: '#',
      destination: ''
    },
    inputPropsGenerator: loginFormInputProps,
    handleOnChange
  }

  const attemptUserLoginButtonProps = {
    dispatchToStore: true,
    onClickFunctionProps: createButton(attemptUserLogin, 'Login', { usernameOrEmail, password })
  }

  return (
    <LoginFormContainer>
      <InputForm { ...inputFormProps } />
      <ButtonManager { ...attemptUserLoginButtonProps } />
    </LoginFormContainer>
  )
}