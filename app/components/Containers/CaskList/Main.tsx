import React from 'react';

import { StyledCaskList } from '../../styledcomponents';

import { GenericComponentProps } from '../../../types';

interface ComponentProps extends GenericComponentProps {};

const Main: React.FC<ComponentProps> = ({ children }) => <StyledCaskList.Main>{ children }</StyledCaskList.Main>;

export default Main;
