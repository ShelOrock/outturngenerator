import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledActiveCask } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const Content: React.FC<ComponentProps> = ({ children }) => <StyledActiveCask.Content>{ children }</StyledActiveCask.Content>;

export default Content;
