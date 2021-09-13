import React from 'react';

import { StyledCaskList } from '../../styledcomponents';

import { GenericComponentProps } from '../../../types';

interface ComponentProps extends GenericComponentProps {};

const Toolbar: React.FC<ComponentProps> = ({ children }) => <StyledCaskList.Toolbar>{ children }</StyledCaskList.Toolbar>;

export default Toolbar;
