import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledPill } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {
  flavourProfile: string;
};

const SmallPill: React.FC<ComponentProps> = ({
  flavourProfile = '',
  children
}) => <StyledPill.SmallPill flavourProfile={ flavourProfile }>{ children }</StyledPill.SmallPill>;

export default SmallPill;
