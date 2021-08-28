import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledNavigation } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {
  to: string;
};

export default ({
  to = '#',
  children
}: ComponentProps): JSX.Element => <StyledNavigation.LinkDiv to={ to }>{ children }</StyledNavigation.LinkDiv>;
