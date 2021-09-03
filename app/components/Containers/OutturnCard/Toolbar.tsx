import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledOutturnList } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const Toolbar: React.FC<ComponentProps> = ({ children }) => <StyledOutturnList.Toolbar>{ children }</StyledOutturnList.Toolbar>;

export default Toolbar;
