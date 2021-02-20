import * as React from 'react';

import * as StyledComponents from '../styledcomponents/index';
const {
  StyledLink: { LinkButton }
} = StyledComponents

export default ({ link, destination }) => <LinkButton to={ link }>{ destination }</LinkButton>