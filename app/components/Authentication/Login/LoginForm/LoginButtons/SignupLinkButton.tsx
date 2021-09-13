import * as React from 'react';

import LinkButtonManager from '../../../../Button/LinkButtonManager';

export default () => {
    
  interface LinkButtonManagerPropTypes {
    destination: string;
    text: string;
    variant: string;
  };

  const linkButtonManagerProps: LinkButtonManagerPropTypes = {
    destination: './signup',
    text: 'Sign Up',
    variant: 'secondary'
  };

  return <LinkButtonManager { ...linkButtonManagerProps } />
};
