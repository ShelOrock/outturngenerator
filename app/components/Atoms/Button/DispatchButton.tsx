import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../utils';

import {
  GenericComponentProps,
  AppDispatch,
  ActionFunctionType,
  ThunkFunctionType
} from '../../../types';

import { StyledButton } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {
  disabled?: boolean;
  dispatch: AppDispatch;
  onClick:
  | ActionFunctionType
  | ThunkFunctionType;
  size?: string;
  variant: string;
};

const DispatchButton: React.FC<ComponentProps> = ({
  disabled = false,
  onClick,
  size,
  variant,
  children
}) => {

  const dispatch = useDispatch();

  const { isLoading } = useTypedSelector(state => state);

  return (
    <StyledButton.Button
      disabled={ disabled && !!isLoading }
      onClick={ () => dispatch(onClick()) }
      variant={ variant }
      size={ size }
    >{ children }</StyledButton.Button>
  );
};

export default DispatchButton;
