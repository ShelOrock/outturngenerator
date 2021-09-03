import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledActiveCask } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const Toolbar: React.FC<ComponentProps> = ({ children }) => <StyledActiveCask.Toolbar>{ children }</StyledActiveCask.Toolbar>;

export default Toolbar;
