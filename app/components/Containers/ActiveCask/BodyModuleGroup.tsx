import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledActiveCask } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const BodyModuleGroup: React.FC<ComponentProps> = ({ children }) => <StyledActiveCask.BodyModuleGroup>{ children }</StyledActiveCask.BodyModuleGroup>;

export default BodyModuleGroup;
