import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledInput } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const Feedback: React.FC<ComponentProps> = ({ children }) => <StyledInput.Feedback>{ children }</StyledInput.Feedback>;

export default Feedback;
