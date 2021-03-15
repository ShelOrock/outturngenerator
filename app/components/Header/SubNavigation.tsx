import * as React from 'react';

import * as StyledComponents from '../styledcomponents/index';
const {
  StyledNavigation: { LinkButton }
} = StyledComponents

export default ({ link = '#', destination = ''}) => <LinkButton to={ link }>{ destination }</LinkButton>