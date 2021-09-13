import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledCaskListItem } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const Header: React.FC<ComponentProps> = ({ children }) => <StyledCaskListItem.Header>{ children }</StyledCaskListItem.Header>;

export default Header;
