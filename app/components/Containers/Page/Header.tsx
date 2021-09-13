import React from 'react';

import { StyledPage } from '../../styledcomponents';

import { GenericComponentProps } from '../../../types';

interface ComponentProps extends GenericComponentProps {};

const Header: React.FC<ComponentProps> = ({ children }) => <StyledPage.Header>{ children }</StyledPage.Header>;

export default Header;