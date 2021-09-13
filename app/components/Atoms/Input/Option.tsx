import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledInput } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {
  value: string;
};

const Option: React.FC<ComponentProps> = ({
  value,
  children
}) => <StyledInput.Option value={ value }>{ children }</StyledInput.Option>;

export default Option;
