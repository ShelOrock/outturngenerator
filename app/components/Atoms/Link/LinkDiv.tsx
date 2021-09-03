import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledNavigation } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {
  to: string;
};

const LinkDiv: React.FC<ComponentProps> = ({
  to = '#',
  children
}) => <StyledNavigation.LinkDiv to={ to }>{ children }</StyledNavigation.LinkDiv>;

export default LinkDiv;
