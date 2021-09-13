import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledModal } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const Main: React.FC<ComponentProps> = ({ children }) => <StyledModal.Main>{ children }</StyledModal.Main>;

export default Main;
