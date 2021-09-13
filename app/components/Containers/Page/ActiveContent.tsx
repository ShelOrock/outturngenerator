import React from 'react';

import { StyledPage } from '../../styledcomponents';

import { GenericComponentProps } from '../../../types';

interface ComponentProps extends GenericComponentProps {};

const ActiveContent: React.FC<ComponentProps> = ({ children }) => <StyledPage.ActiveContent>{ children }</StyledPage.ActiveContent>;

export default ActiveContent;