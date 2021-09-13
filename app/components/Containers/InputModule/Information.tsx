import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledForm } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const Information: React.FC<ComponentProps> = ({ children }) => <StyledForm.Information>{ children }</StyledForm.Information>;

export default Information;
