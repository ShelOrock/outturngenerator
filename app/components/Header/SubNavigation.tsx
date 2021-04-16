import * as React from 'react';
import { SubNavigationPropTypes } from '../../types';

import * as StyledComponents from '../styledcomponents/index';

const { StyledNavigation: { LinkButton } } = StyledComponents

export default ({ link = '#', destination = ''}: SubNavigationPropTypes) => (
  <LinkButton to={ link }>
    { destination }
  </LinkButton>
)