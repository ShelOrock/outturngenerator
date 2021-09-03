import React from 'react';

import { StyledCaskList } from '../../styledcomponents';

import { GenericComponentProps } from '../../../types';

interface ComponentProps extends GenericComponentProps {
  ref: React.ReactNode;
};

const Drop: React.FC<ComponentProps> = ({ children }) => <StyledCaskList.Drop>{ children }</StyledCaskList.Drop>;

export default Drop;
