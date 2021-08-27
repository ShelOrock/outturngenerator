import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledForm } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

export default ({ children }: ComponentProps): JSX.Element => <StyledForm.InputLabel>{ children }</StyledForm.InputLabel>;