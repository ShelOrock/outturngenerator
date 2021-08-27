import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledType } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

export default ({ children }: ComponentProps): JSX.Element => <StyledType.SubTitle>{ children }</StyledType.SubTitle>;
