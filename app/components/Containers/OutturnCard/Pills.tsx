import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledOutturnList } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const Pills: React.FC<ComponentProps> = ({ children }) => <StyledOutturnList.Pills>{ children }</StyledOutturnList.Pills>;

export default Pills;
