import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledOutturnList } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const Header: React.FC<ComponentProps> = ({ children }) => <StyledOutturnList.Header>{ children }</StyledOutturnList.Header>;

export default Header;
