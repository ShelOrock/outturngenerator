import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledInput } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const Label: React.FC<ComponentProps> = ({ children }) => <StyledInput.InputLabel>{ children }</StyledInput.InputLabel>;

export default Label;