import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledType } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const Title: React.FC<ComponentProps> = ({ children }) => <StyledType.Title>{ children }</StyledType.Title>;

export default Title;
