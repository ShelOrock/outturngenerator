import * as React from 'react';
const { useEffect, useState } = React;
import { useHistory } from 'react-router-dom';
import { useTypedSelector, createButton } from '../../utils';

//Components
import InputForm from '../Form/InputForm';
import ButtonManager from '../Button/ButtonManager';
//Styled Components
import * as StyledComponents from '../styledcomponents/index';
const { StyledForm: { LoginFormContainer } } = StyledComponents;

import * as thunks from '../../redux/thunks';
const { authenticationThunks: { attemptUserSignUp } } = thunks;

import {
  InputOnChangeType,
  InputFormPropTypes,
  SignUpFormPropTypes,
  AttemptUserSignUpButtonPropTypes
} from '../../types';

export default () => {

  const history = useHistory();

  const { activeUser } = useTypedSelector(state => state)
  const [ localState, setLocalState ] = useState({
    usernameOrEmail: '',
    password: '',
  });
  const { usernameOrEmail, password } = localState;

  useEffect(() => {
    if(activeUser.loggedIn == 'Online') history.push('/')
  }, [activeUser])

  const onChange: InputOnChangeType = ({ target: { name, value } } ) => {
    setLocalState({
      ...localState,
      [name]: value
    })
  };

  const loginFormInputProps: SignUpFormPropTypes = [
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
  ];

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
  };

  const attemptUserSignUpButtonProps: AttemptUserSignUpButtonPropTypes = {
    dispatchToStore: true,
    onClick: createButton(
      attemptUserSignUp,
      'Sign Up',
      { usernameOrEmail, password }
    )
  }

  return (
    <LoginFormContainer>
      <InputForm { ...inputFormProps } />
      <ButtonManager { ...attemptUserSignUpButtonProps } />
    </LoginFormContainer>
  )
}