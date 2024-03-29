import React from 'react';

import { CaskListContainers } from '../../Containers';
import { Input, Button } from '../../Atoms';

import { 
  GenericComponentProps,
  AppDispatch,
  AppThunk,
  InputOnChangeType,
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
  handleMarkAllCasks: InputOnChangeType;
  handleSaveCasks: () => AppThunk

};

const Toolbar: React.FC<ComponentProps> = ({
  casks = [],
  markedCasks = [],
  outturnId,
  isEdited = false,
  userType = 'Guest',
  handleMarkAllCasks,
  handleSaveCasks,
}) => (
  <CaskListContainers.Toolbar>
    { userType === 'Admin' || userType === 'Standard' && (
      <Input.Checkbox
        name={ outturnId }
        checked={ casks.length && casks.length === markedCasks.length }
        onChange={ handleMarkAllCasks }
      />
    ) }
    { userType === 'Admin' || userType === 'Standard' && (
      <Button.Button
        variant={ 'primary' }
        disabled={ !isEdited }
        onClick={ handleSaveCasks }
      >Save</Button.Button>
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
