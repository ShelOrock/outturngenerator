import * as React from 'react';
const { useState } = React;

import InputForm from '../../../Form/InputForm';
import LoginButtons from './LoginButtons';
import * as StyledComponents from '../../../styledcomponents';
const { StyledDiv: { Column } } = StyledComponents;

import {
    FormPropTypes,
    FormInputPropTypes,
    InputOnChangeType
  } from '../../../../types';

export default () => {
  
  const [ localState, setLocalState ] = useState({
    usernameOrEmail: '',
    password: ''
  });
  const { usernameOrEmail, password } = localState;

  const onChange: InputOnChangeType = ({ target: { name, value } }) => {
    setLocalState({
      ...localState,
      [name]: value
    });
  };

  type LoginFormPropTypes = FormInputPropTypes[];

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
        },
      ],
    },
  ];

  const inputFormProps: FormPropTypes = {
    backLinkButton: {
      link: '#',
      destination: ''
    },
    forwardLinkButton: {
      link: '#',
      destination: ''
    },
    inputPropsGenerator: loginFormInputProps,
    onChange,
    width: '40%'
  };

  const loginButtonsProps: typeof localState = {
    usernameOrEmail,
    password
  };

  return (
    <Column alignItems='center'>
      <InputForm { ...inputFormProps } />
      <LoginButtons { ...loginButtonsProps } />
    </Column>
  );
};