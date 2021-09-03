import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledCaskListItem } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const Main: React.FC<ComponentProps> = ({ children }) => <StyledCaskListItem.Main>{ children }</StyledCaskListItem.Main>;

export default Main;
