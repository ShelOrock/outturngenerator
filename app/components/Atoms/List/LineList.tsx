import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledList } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

export default ({ children }: ComponentProps): React.ReactNode => <StyledList.LineList>{ children }</StyledList.LineList>;
