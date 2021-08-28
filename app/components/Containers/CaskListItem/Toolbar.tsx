import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledCaskList } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

export default ({ children }: ComponentProps): JSX.Element => <StyledCaskList.Toolbar>{ children }</StyledCaskList.Toolbar>;
