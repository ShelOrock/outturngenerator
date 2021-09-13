import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledType } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const BodyTitle: React.FC<ComponentProps> = ({ children }) => <StyledType.BodyTitle>{ children }</StyledType.BodyTitle>;

export default BodyTitle;
