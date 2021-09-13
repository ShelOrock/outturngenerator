import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledModal } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const Buttons: React.FC<ComponentProps> = ({ children }) => <StyledModal.Buttons>{ children }</StyledModal.Buttons>;

export default Buttons;
