import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledPill } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {
  flavourProfile: string;
};

export default ({
  flavourProfile = '',
  children
}: ComponentProps): JSX.Element => <StyledPill.SmallPill flavourProfile={ flavourProfile }>{ children }</StyledPill.SmallPill>;
