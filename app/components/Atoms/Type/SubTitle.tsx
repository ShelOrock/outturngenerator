import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledType } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const SubTitle: React.FC<ComponentProps> = ({ children }) => <StyledType.SubTitle>{ children }</StyledType.SubTitle>;

export default SubTitle;
