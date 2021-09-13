import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledNavigation } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {
  to: string;
};

const NavigationLink: React.FC<ComponentProps> = ({
  to = '#',
  children
}) => <StyledNavigation.NavLink to={ to }>{ children }</StyledNavigation.NavLink>;

export default NavigationLink;
