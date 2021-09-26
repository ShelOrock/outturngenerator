import React from 'react';

import { StyledCard } from '../../styledcomponents';

import { GenericComponentProps } from '../../../types';

interface ComponentProps extends GenericComponentProps {};

const Content: React.FC<ComponentProps> = ({ children }) => <StyledCard.Content>{ children }</StyledCard.Content>

export default Content;
