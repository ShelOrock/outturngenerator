import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../utils';

import {
  GenericComponentProps,
  ButtonOnClickType,
  AppDispatch
} from '../../../types';

import { StyledButton } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {
  disabled?: boolean;
  dispatch: AppDispatch;
  onClick: ButtonOnClickType;
  size?: string;
  variant: string;
};

export default ({
  disabled = false,
  onClick,
  size,
  variant,
  children
}: ComponentProps): JSX.Element => {

  const dispatch = useDispatch();

  const { isLoading } = useTypedSelector(state => state);

  return (
    <StyledButton.Button
      disabled={ disabled && !!isLoading }
      onClick={ e => dispatch(onClick(e)) }
      variant={ variant }
      size={ size }
    >{ children }</StyledButton.Button>
  );
};
