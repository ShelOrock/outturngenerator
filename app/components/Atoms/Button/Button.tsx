import React from 'react';

import { StyledButton } from '../../styledcomponents';

import { GenericComponentProps, AppDispatch } from '../../../types';

interface ComponentProps extends GenericComponentProps {
  disabled?: boolean;
  dispatch?: AppDispatch | null;
  onClick?: any; //TODO
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
}) => (
  <StyledButton.Button
    disabled={ disabled }
    onClick={ () => dispatch ? dispatch(onClick()) : onClick() }
    variant={ variant }
    size={ size }
  >{ children }</StyledButton.Button>
);

export default Button;
