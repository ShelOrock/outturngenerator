import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledOutturnList } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

export default ({ children }: ComponentProps): JSX.Element => <StyledOutturnList.Body>{ children }</StyledOutturnList.Body>;
