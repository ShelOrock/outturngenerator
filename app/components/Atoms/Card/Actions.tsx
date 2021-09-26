import React from 'react';

import { StyledCard } from '../../styledcomponents';

import { GenericComponentProps } from '../../../types';

interface ComponentProps extends GenericComponentProps {};

const Actions: React.FC<ComponentProps> = ({ children }) => <StyledCard.Actions>{ children }</StyledCard.Actions>

export default Actions;
