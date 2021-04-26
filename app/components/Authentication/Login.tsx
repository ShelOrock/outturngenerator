//Dependency Libraries
import * as React from 'react';
const { useState, useEffect } = React;
import { useHistory } from 'react-router-dom';
//Dependency Functions
import { useTypedSelector, createButton } from '../../utils';

//Components
import InputForm from '../Form/InputForm';
import ButtonManager from '../Button/ButtonManager';
//Styled Components
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledForm: { LoginFormContainer },
  StyledNavigation: { LargeLinkButton },
} = StyledComponents;

//Redux thunks
import * as thunks from '../../redux/thunks';
const { authenticationThunks: { attemptUserLogin } } = thunks;

//Types
import {
  InputOnChangeType,
  InputFormPropTypes,
  LoginFormPropTypes,
  AttemptUserLoginButtonPropTypes
} from '../../types/index';

export default () => {

  const history = useHistory();

  const { activeUser } = useTypedSelector(state => state);
  const [ localState, setLocalState ] = useState({
    usernameOrEmail: '',
    password: ''
  })
  const { usernameOrEmail, password } = localState;
  
  useEffect(() => {
    if(activeUser.loggedIn == 'Online') history.push('/')
  }, [activeUser])

  const onChange: InputOnChangeType = ({ target: { name, value } } ) => {
    setLocalState({
      ...localState,
      [name]: value
    })
  }

  const loginFormInputProps: LoginFormPropTypes = [
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

  const inputFormProps: InputFormPropTypes = {
    backLinkButton: {
      link: '#',
      destination: ''
    },
    forwardLinkButton: {
      link: '#',
      destination: ''
    },
    inputPropsGenerator: loginFormInputProps,
    onChange
  }

  const attemptUserLoginButtonProps: AttemptUserLoginButtonPropTypes = {
    dispatchToStore: true,
    onClick: createButton(
      attemptUserLogin,
      'Login',
      { usernameOrEmail, password }
    )
  }

  return (
    <LoginFormContainer>
      <InputForm { ...inputFormProps } />
      <ButtonManager { ...attemptUserLoginButtonProps } />
      <LargeLinkButton
        to='/signup'
        variant='secondary'
      >Sign up</LargeLinkButton>
    </LoginFormContainer>
  )
}