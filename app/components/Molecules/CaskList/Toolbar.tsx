import React from 'react';

import { CaskListContainers } from '../../Containers';
import { Input, Button } from '../../Atoms';

import { 
  GenericComponentProps,
  AppDispatch,
  Cask,
} from '../../../types';

interface ComponentProps extends GenericComponentProps {
  casks: Cask[];
  markedCasks: string[];
  outturnId: string;
  isEdited: boolean;
  userType: 
  | 'Admin'
  | 'Standard'
  | 'Unconfirmed'
  | 'Guest';
  dispatch: AppDispatch;

};

const Toolbar: React.FC<ComponentProps> = ({
  casks = [],
  markedCasks = [],
  outturnId,
  isEdited = false,
  userType = 'Guest',
  dispatch,
}) => (
  <CaskListContainers.Toolbar>
    { userType === 'Admin' || userType === 'Standard' && (
      <Input.Checkbox
        type={ 'checkbox' }
        name={ outturnId }
        checked={ casks.length && casks.length === markedCasks.length }
        onChange={ () => {} /*TODO*/ }
      />
    ) }
    { userType === 'Admin' || userType === 'Standard' && (
      <Button.DispatchButton
        variant={ 'primary' }
        disabled={ !isEdited }
        dispatch={ dispatch }
        onClick={ () => {} /*TODO*/ }
      >Save</Button.DispatchButton>
    ) }
    { userType === 'Admin' || userType ==='Standard' && (
      <Button.Button
        variant='secondary'
        disabled={ !isEdited }
        onClick={ () => {} /*TODO*/ }
      >Cancel</Button.Button>
    ) }
  </CaskListContainers.Toolbar>
);

export default Toolbar;
