import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledCaskListItem } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const Body: React.FC<ComponentProps> = ({ children }) => <StyledCaskListItem.Body>{ children }</StyledCaskListItem.Body>;

export default Body;
