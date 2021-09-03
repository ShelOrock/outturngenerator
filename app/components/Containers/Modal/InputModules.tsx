import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledModal } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const InputModules: React.FC<ComponentProps> = ({ children }) => <StyledModal.InputModules>{ children }</StyledModal.InputModules>;

export default InputModules;
