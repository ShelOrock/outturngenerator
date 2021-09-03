import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledOutturnList } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const Body: React.FC<ComponentProps> = ({ children }) => <StyledOutturnList.Body>{ children }</StyledOutturnList.Body>;

export default Body;
