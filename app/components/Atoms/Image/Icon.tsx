import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledPill } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {
  variant: string;
};

export default ({ variant, children }: ComponentProps): React.ReactNode => <StyledPill.OnlineIcon variant={ variant }>{ children }</StyledPill.OnlineIcon>;
