import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledPill } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {
  flavourProfile: string;
};

const LargePill: React.FC<ComponentProps> = ({
  flavourProfile = '',
  children
}) => <StyledPill.LargePill flavourProfile={ flavourProfile }>{ children }</StyledPill.LargePill>;

export default LargePill;
