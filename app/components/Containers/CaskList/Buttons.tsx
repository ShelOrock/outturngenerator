import React from 'react';

import { StyledCaskList } from '../../styledcomponents';

import { GenericComponentProps } from '../../../types';

interface ComponentProps extends GenericComponentProps {};

const Buttons: React.FC<ComponentProps> = ({ children }) => <StyledCaskList.Buttons>{ children }</StyledCaskList.Buttons>;

export default Buttons;
