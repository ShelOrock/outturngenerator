import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../utils';

import * as StyledComponents from '../styledcomponents/index';
const { StyledButton: { Button } } = StyledComponents;

export default ({ props }) => {
  const dispatch = useDispatch();
  const { isLoading } = useTypedSelector(state => state)

  return (
    <Button disabled={ !!isLoading } onClick={ () => dispatch(props.onClickFunction(...props.arguments)) }>{ props.text }</Button>
  )
}