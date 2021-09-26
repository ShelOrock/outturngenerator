import * as React from 'react';

// import ButtonManager from '../../../../Button/ButtonManager';

import * as reduxThunks from '../../../../../redux/thunks';
const { authenticationThunks: { attemptUserSignUp } } = reduxThunks;

import { ThunkFunctionType } from '../../../../../types';

export default (credentialProps) => {

  interface SignUpButtonOnClickPropTypes {
    onClickFunction: ThunkFunctionType,
    arguments: any[];
    text: 'Sign up';
  };

  interface AttemptUserSignUpButtonPropTypes {
    dispatchToStore: boolean;
    onClick: any;
    size: string;
  };

  const signUpButtonOnClickProps: SignUpButtonOnClickPropTypes = {
    onClickFunction: attemptUserSignUp,
    arguments: [ credentialProps ],
    text: 'Sign up',
  };

  const attemptUserSignUpButtonProps: AttemptUserSignUpButtonPropTypes = {
    dispatchToStore: true,
    onClick: signUpButtonOnClickProps,
    size: 'large'
  };

  return <></>//<ButtonManager { ...attemptUserSignUpButtonProps } />
};