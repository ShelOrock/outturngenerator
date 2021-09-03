import React from 'react';

import { StyledPage } from '../../styledcomponents';

import { GenericComponentProps } from '../../../types';

interface ComponentProps extends GenericComponentProps {};

const Main: React.FC<ComponentProps> = ({ children }) => <StyledPage.Main>{ children }</StyledPage.Main>;

export default Main;
