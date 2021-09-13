import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledType } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const SubHeading: React.FC<ComponentProps> = ({ children }) => <StyledType.SubHeading>{ children }</StyledType.SubHeading>;

export default SubHeading;
