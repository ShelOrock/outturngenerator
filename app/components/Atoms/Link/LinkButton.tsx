import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledNavigation } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {
  to: string;
};

const LinkButton: React.FC<ComponentProps> = ({
  to = '#',
  children
}) => <StyledNavigation.LinkButton to={ to }>{ children }</StyledNavigation.LinkButton>;

export default LinkButton;
