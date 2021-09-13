import React from 'react';

import { CaskListItemContainers } from '../../Containers';
import {
  Link,
  Input,
  Button
} from '../../Atoms';

import {
  GenericComponentProps,
  AppDispatch,
  ActionFunctionType,
  InputOnChangeType,
} from '../../../types';

interface ComponentProps extends GenericComponentProps {
  userType: string;
  caskId: string;
  markedCasks: String[]
  handleMarkCask: InputOnChangeType;
  handleSetModal: ActionFunctionType;
  dispatch: AppDispatch
};

const Toolbar: React.FC<ComponentProps> = ({
  userType = 'Guest',
  caskId,
  markedCasks = [],
  handleMarkCask,
  handleSetModal,
  dispatch
}) => (
  <CaskListItemContainers.Toolbar>
    { userType == 'Admin' || userType == 'Standard' && (
      <Input.Checkbox
        type={ 'checkbox' }
        name={ caskId }
        checked={ markedCasks.includes(caskId) }
        onChange={ handleMarkCask }
      />
    ) }
    <CaskListItemContainers.Buttons>
    { userType == 'Admin' || userType == 'Standard' && <Link.LinkButton to={ `/edit/${ caskId }` }>Edit</Link.LinkButton> }
    { userType == 'Admin' || userType == 'Standard' && (
      <Button.DispatchButton
        variant={ 'tertiary' }
        dispatch={ dispatch }
        onClick={ handleSetModal }
      >X Delete</Button.DispatchButton>
    ) } 
    </CaskListItemContainers.Buttons>
  </CaskListItemContainers.Toolbar>
);

export default Toolbar;
