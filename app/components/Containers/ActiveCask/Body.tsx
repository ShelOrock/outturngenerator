import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledActiveCask } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const Body: React.FC<ComponentProps> = ({ children }) => <StyledActiveCask.Body>{ children }</StyledActiveCask.Body>;

export default Body;
