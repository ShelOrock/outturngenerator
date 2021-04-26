//Dependency Libraries
import * as React from 'react';

//Styled Components
import * as StyledComponents from '../styledcomponents/index';
const { StyledNavigation: { LinkButton } } = StyledComponents

//Types
import { SubNavigationPropTypes } from '../../types';

export default ({ link = '#', destination = ''}: SubNavigationPropTypes) => (
  <LinkButton to={ link }>
    { destination }
  </LinkButton>
)