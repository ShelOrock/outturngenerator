import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledActiveCask } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const BodyModule: React.FC<ComponentProps> = ({ children }) => <StyledActiveCask.BodyModule>{ children }</StyledActiveCask.BodyModule>;

export default BodyModule;
