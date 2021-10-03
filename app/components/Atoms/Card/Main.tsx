import React from 'react';

import { StyledCard } from '../../styledcomponents';

import { GenericComponentProps } from '../../../types';

interface ComponentProps extends GenericComponentProps {
  color: string;
};

const Main: React.FC<ComponentProps> = ({ color = 'default', children }) => <StyledCard.Card color={ color }>{ children }</StyledCard.Card>

export default Main;
