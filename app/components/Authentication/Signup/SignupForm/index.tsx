import * as React from 'react';
const { useState } = React;

import InputForm from '../../../Form/InputForm';

import SignupButton from './SignupButton';
//Styled Components
import * as StyledComponents from '../../../styledcomponents/index';
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

  type SignUpFormPropTypes = FormInputPropTypes[];

  const signupFormInputProps: SignUpFormPropTypes = [
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

  const formProps: FormPropTypes = {
    backLinkButton: {
      link: '#',
      destination: ''
    },
    forwardLinkButton: {
      link: '#',
      destination: ''
    },
    inputPropsGenerator: signupFormInputProps,
    onChange,
    width: '40%'
  };

  const credentialProps: typeof localState = {
    usernameOrEmail,
    password
  }

  return (
    <Column alignItems='center'>
      <InputForm { ...formProps } />
      <SignupButton { ...credentialProps } />
    </Column>
  )
}