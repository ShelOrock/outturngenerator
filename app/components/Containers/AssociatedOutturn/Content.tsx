import React from 'react';

import { StyledAssociatedOutturn } from '../../styledcomponents';

import { GenericComponentProps } from '../../../types';

interface ComponentProps extends GenericComponentProps {};

const Content: React.FC<ComponentProps> = ({ children }) => <StyledAssociatedOutturn.Content>{ children }</StyledAssociatedOutturn.Content>;

export default Content; 
