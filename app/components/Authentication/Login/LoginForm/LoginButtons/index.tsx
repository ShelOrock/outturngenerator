import * as React from 'react';

import LoginButton from './LoginButton';
import SignupLinkButton from './SignupLinkButton'
import * as StyledComponents from '../../../../styledcomponents';
const { StyledDiv: { Column } } = StyledComponents;
 
export default (credentialProps) => {
  
  return (
    <Column alignItems='center'>
      <LoginButton { ...credentialProps } />
      <SignupLinkButton />
    </Column>
  )
}