import * as React from 'react';
const { useEffect, useState } = React;
import { useHistory } from 'react-router-dom';
import { useTypedSelector, createButton } from '../../utils';

//Components
import PageHeaderManager from '../Header/PageHeaderManager';
import InputForm from '../Form/InputForm';
import ButtonManager from '../Button/ButtonManager';
//Styled Components
import * as StyledComponents from '../styledcomponents/index';
const { StyledDiv: { Row, Column } } = StyledComponents;

import * as thunks from '../../redux/thunks';
const { authenticationThunks: { attemptUserSignUp } } = thunks;

import {
  InputOnChangeType,
  InputFormPropTypes,
  SignUpFormPropTypes,
  AttemptUserSignUpButtonPropTypes,
  PageHeaderPropTypes
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

  const pageHeaderProps: PageHeaderPropTypes = {
    subNavigationProps: {
      link: "/",
      destination: "< Back",
    },
    toolbarProps: {
      pageTitle: 'Sign up',
      addButtonProps: null,
      deleteButtonProps: null
    }
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
    onChange,
    width: '40%'
  };

  const attemptUserSignUpButtonProps: AttemptUserSignUpButtonPropTypes = {
    dispatchToStore: true,
    onClick: createButton(
      attemptUserSignUp,
      'Sign Up',
      { usernameOrEmail, password }
    ),
    size: 'large'
  }

  return (
    <Column>
      <PageHeaderManager { ...pageHeaderProps }/>
      <InputForm { ...inputFormProps } />
      <Row width='100%' alignItems='center' justifyContent='center'>
        <ButtonManager { ...attemptUserSignUpButtonProps } />
      </Row>
    </Column>
  )
}