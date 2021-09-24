import React from 'react';

import { ActiveCaskContainers } from '../../Containers';
import { Button, Link } from '../../Atoms';

import {
  GenericComponentProps,
  AppDispatch,
  AppThunk
} from '../../../types';

interface ComponentProps extends GenericComponentProps {
  userType:
  | 'Admin'
  | 'Standard'
  | 'Unconfirmed'
  | 'Guest',
  caskId: string;
  dispatch: AppDispatch;
  onClick: () => AppThunk
};

const Toolbar: React.FC<ComponentProps> = ({
  userType = 'Guest',
  caskId,
  dispatch,
  onClick,
}) => (
  <ActiveCaskContainers.Toolbar>
    { userType === 'Admin' || userType === 'Standard' && <Link.LinkButton to={ `edit/${ caskId }` }>Edit</Link.LinkButton> }
    { userType === 'Admin' || userType === 'Standard' && (
      <Button.Button
        variant='tertiary'
        dispatch={ dispatch }
        onClick={ onClick }
      >X Delete</Button.Button>
    )}
  </ActiveCaskContainers.Toolbar>
);

export default Toolbar;
