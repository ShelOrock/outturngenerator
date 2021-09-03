import React from 'react';

import {
  GenericComponentProps,
  InputOnChangeType,
  AppDispatch
} from '../../../types';

import { CaskListItemContainers } from '../../Containers';
import {
  Link,
  Input,
  Button
} from '../../Atoms';

import { modalActions } from '../../../redux/actions';

interface ComponentProps extends GenericComponentProps {
  userType: string;
  caskId: string;
  markedCasks: String[]
  onCheck: InputOnChangeType;
  dispatch: AppDispatch
};

const Toolbar: React.FC<ComponentProps> = ({
  userType = 'Guest',
  caskId,
  markedCasks = [],
  onCheck,
  dispatch
}) => (
  <CaskListItemContainers.Toolbar>
    { userType == 'Admin' || userType == 'Standard' && (
      <Input.Checkbox
        type={ 'checkbox' }
        name={ caskId }
        checked={ markedCasks.includes(caskId) }
        onChange={ () => onCheck() }
      />
    ) }
    <CaskListItemContainers.Buttons>
    { userType == 'Admin' || userType == 'Standard' && <Link.LinkButton to={ `/edit/${ caskId }` }>Edit</Link.LinkButton> }
    { userType == 'Admin' || userType == 'Standard' && (
      <Button.DispatchButton
        variant={ 'tertiary' }
        dispatch={ dispatch }
        onClick={ () => modalActions.setModal({
          modalHeader: '',
          confirmButton: null //TODO
        }) }
      >X Delete</Button.DispatchButton>
    ) } 
    </CaskListItemContainers.Buttons>
  </CaskListItemContainers.Toolbar>
);

export default Toolbar;
