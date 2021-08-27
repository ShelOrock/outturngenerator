import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledForm } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {
  value: string;
};

export default ({
  value,
  children
}: ComponentProps): React.ReactNode => <StyledForm.Option value={ value }>{ children }</StyledForm.Option>;
