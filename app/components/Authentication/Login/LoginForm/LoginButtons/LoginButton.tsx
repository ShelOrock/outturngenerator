import * as React from 'react';

import ButtonManager from '../../../../Button/ButtonManager';

import * as reduxThunks from '../../../../../redux/thunks';
const { authenticationThunks: { attemptUserLogin } } = reduxThunks;
 
import { ThunkFunctionType } from '../../../../../types';

export default (credentialProps) => {

  interface LoginButtonOnClickPropTypes {
    onClickFunction: ThunkFunctionType;
    arguments: any[];
    text: 'Login';
  };

  interface AttemptUserLoginButtonPropTypes {
    dispatchToStore: boolean;
    onClick: any;
    size: string;
  };

  const loginButtonOnClickProps: LoginButtonOnClickPropTypes = {
    onClickFunction: attemptUserLogin,
    arguments: [ credentialProps ],
    text: 'Login',
  };

  const attemptUserLoginButtonProps: AttemptUserLoginButtonPropTypes = {
    dispatchToStore: true,
    onClick: loginButtonOnClickProps,
    size: 'large',
  };
  
  return <ButtonManager { ...attemptUserLoginButtonProps } />
};