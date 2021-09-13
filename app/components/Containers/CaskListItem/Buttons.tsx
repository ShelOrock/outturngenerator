import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledCaskListItem } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const Buttons: React.FC<ComponentProps> = ({ children }) => <StyledCaskListItem.Buttons>{ children }</StyledCaskListItem.Buttons>;

export default Buttons;
