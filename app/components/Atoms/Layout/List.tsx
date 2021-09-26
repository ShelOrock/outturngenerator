import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledList } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const LineList: React.FC<ComponentProps> = ({ children }) => <StyledList.LineList>{ children }</StyledList.LineList>;

export default LineList;
