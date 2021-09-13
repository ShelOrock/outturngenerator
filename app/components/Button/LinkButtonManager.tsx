import * as React from 'react';

import * as StyledComponents from '../styledcomponents';
const { StyledNavigation: { LargeLinkButton } } = StyledComponents;

export default ({ destination, text, variant }) => {
    
  const linkButtonProps = {
    to: destination,
    variant,
  };

  return <LargeLinkButton { ...linkButtonProps }>{ text }</LargeLinkButton>;
}