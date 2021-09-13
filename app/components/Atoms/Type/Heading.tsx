import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledType } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const Heading: React.FC<ComponentProps> = ({ children }) => <StyledType.Heading>{ children }</StyledType.Heading>;

export default Heading;
