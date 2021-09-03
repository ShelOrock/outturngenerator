import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledOutturnList } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const Main: React.FC<ComponentProps> = ({ children }) => <StyledOutturnList.Main>{ children }</StyledOutturnList.Main>;

export default Main;
