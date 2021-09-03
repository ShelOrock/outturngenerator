import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledCaskListItem } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const Toolbar: React.FC<ComponentProps> = ({ children }) => <StyledCaskListItem.Toolbar>{ children }</StyledCaskListItem.Toolbar>;

export default Toolbar;
