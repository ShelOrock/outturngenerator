import * as React from 'react';
const { useEffect } = React;
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../utils';

import * as actions from '../../redux/actions';
const { toastActions: { resetToast } } = actions;

export default () => {

  const toast = useTypedSelector(state => state.toast);

  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setTimeout(() => {
      if(toast.length) dispatch(resetToast());
    }, 5000)
    return () => {
      clearInterval(interval);
    }
  }, [toast.length])

  return (
    <div>meow</div>
  )
}