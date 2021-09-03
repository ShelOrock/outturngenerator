import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledType } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const Body: React.FC<ComponentProps> = ({ children }) => <StyledType.Body>{ children }</StyledType.Body>;

export default Body;
