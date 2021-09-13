import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledInput } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const Main: React.FC<ComponentProps> = ({ children }) => <StyledInput.Main>{ children }</StyledInput.Main>;

export default Main;
