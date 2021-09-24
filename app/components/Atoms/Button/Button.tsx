import React from 'react';
import { useTypedSelector } from '../../../utils';

import { GenericComponentProps, AppDispatch } from '../../../types';

import { StyledButton } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {
  disabled?: boolean;
  dispatch?: AppDispatch | null;
  onClick?: any //TODO;
  size?: string;
  variant: string;
};

const Button: React.FC<ComponentProps> = ({
  disabled = false,
  dispatch = null,
  onClick = () => {},
  size,
  variant,
  children
}) => {

  const { isLoading } = useTypedSelector(state => state);

  return (
    <StyledButton.Button
      disabled={ disabled && !!isLoading }
      onClick={ () => dispatch ? dispatch(onClick()) : onClick() }
      variant={ variant }
      size={ size }
    >{ children }</StyledButton.Button>
  );
};

export default Button;