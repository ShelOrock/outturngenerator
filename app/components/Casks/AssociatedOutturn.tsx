import * as React from 'react';
import { useTypedSelector } from '../../utils';

export default () => {
  const { allOutturns, activeCask } = useTypedSelector(state => state);

  return (
    <div>
      {
        Object.keys(activeCask).length
        ? activeCask.outturnId
          ? <div>This cask is assigned to { allOutturns.find(outturn => outturn.id === activeCask.outturnId).name }</div>
          : <div>This cask is not assigned to an outturn.</div>
        : null
      }
    </div>
  )
}