import React from 'react';

import { StyledCaskList } from '../../styledcomponents';

import { GenericComponentProps } from '../../../types';

interface ComponentProps extends GenericComponentProps {
  ref: React.ReactNode;
};

const Drag: React.FC<ComponentProps> = ({ children }) => <StyledCaskList.Drag>{ children }</StyledCaskList.Drag>;

export default Drag;
