import React from 'react';

import { StyledAssociatedOutturn } from '../../styledcomponents';

import { GenericComponentProps } from '../../../types';

interface ComponentProps extends GenericComponentProps {};

const Main: React.FC<ComponentProps> = ({ children }) => <StyledAssociatedOutturn.Main>{ children }</StyledAssociatedOutturn.Main>;

export default Main; 
