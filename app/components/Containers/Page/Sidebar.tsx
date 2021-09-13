import React from 'react';

import { StyledPage } from '../../styledcomponents';

import { GenericComponentProps } from '../../../types';

interface ComponentProps extends GenericComponentProps {};

const Sidebar: React.FC<ComponentProps> = ({ children }) => <StyledPage.Sidebar>{ children }</StyledPage.Sidebar>;

export default Sidebar;