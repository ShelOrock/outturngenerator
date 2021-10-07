import React from 'react';

import { StyledButton } from '../../styledcomponents';

import { GenericComponentProps } from '../../../types';

interface ComponentProps extends GenericComponentProps {
  disabled?: boolean;
  onClick?: any; //TODO
  size?: string;
  variant: string;
};

const Button: React.FC<ComponentProps> = ({
  disabled = false,
  onClick = () => {},
  size,
  variant,
  children
}) => (
  <StyledButton.Button
    disabled={ disabled }
    onClick={ () => onClick() }
    variant={ variant }
    size={ size }
  >{ children }</StyledButton.Button>
);

export default Button;
