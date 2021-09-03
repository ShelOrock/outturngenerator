import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledActiveCask } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const Header: React.FC<ComponentProps> = ({ children }) => <StyledActiveCask.Header>{ children }</StyledActiveCask.Header>;

export default Header;
