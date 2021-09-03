import React from 'react';
import { useTypedSelector } from '../../../utils';

import { GenericComponentProps, ButtonOnClickType } from '../../../types';

import { StyledButton } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {
  disabled?: boolean;
  onClick: ButtonOnClickType;
  size?: string;
  variant: string;
};

const Button: React.FC<ComponentProps> = ({
  disabled = false,
  onClick,
  size,
  variant,
  children
}) => {

  const { isLoading } = useTypedSelector(state => state);

  return (
    <StyledButton.Button
      disabled={ disabled && !!isLoading }
      onClick={ e => onClick(e) }
      variant={ variant }
      size={ size }
    >{ children }</StyledButton.Button>
  );
};

export default Button;