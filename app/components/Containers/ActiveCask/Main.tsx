import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledActiveCask } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const Main: React.FC<ComponentProps> = ({ children }) => <StyledActiveCask.Main>{ children }</StyledActiveCask.Main>;

export default Main;
