import React from 'react';
import { useDispatch } from 'react-redux';
import { createButton } from '../../utils';

import {
  GenericComponentProps,
  InputOnChangeType,
  Cask,
  User,
} from '../../types';

import { CaskListItemContainers } from '../Containers';
import {
  Type,
  Link,
  Form,
  Button,
  Pill
} from '../Atoms';

import { modalActions } from '../../redux/actions';

import { activeCaskThunks } from '../../redux/thunks';

interface ComponentProps extends GenericComponentProps {
  cask: Cask;
  markedCasks: String[];
  onCheck: InputOnChangeType;
  user: User;
};

export default ({
  cask = {} as Cask,
  markedCasks = [],
  onCheck,
  user = {} as User,
}: ComponentProps): JSX.Element => {

  const dispatch = useDispatch()
  
  return (
    <CaskListItemContainers.CaskListItem>
      <CaskListItemContainers.Toolbar>
        { user.userType !== 'Guest' && (
          <Form.Checkbox
            type={ 'checkbox' }
            name={ cask.id }
            checked={ markedCasks.includes(cask.id) }
            onChange={ () => onCheck() }
          />
        ) }
        <CaskListItemContainers.Buttons>
          { user.userType !== 'Guest' && <Link.LinkButton to={ `/edit/${ cask.id }` }>Edit</Link.LinkButton> }
          { user.userType !== 'Guest' && (
            <Button.DispatchButton
              variant={ 'tertiary' }
              dispatch={ dispatch }
              onClick={ () => modalActions.setModal({
                confirmButton: null //TODO
              }) }
            >X Delete</Button.DispatchButton>
          ) }
        </CaskListItemContainers.Buttons>
      </CaskListItemContainers.Toolbar>
      <Button.DispatchButton
        variant={ 'tertiary' }
        dispatch={ dispatch }
        onClick={ () => activeCaskThunks.getActiveCask(cask.id) }
      >
        <CaskListItemContainers.Header>
          <Type.Heading>{ cask.caskNumber ? `Cask No. ${ cask.caskNumber }` : 'Untitled Cask' }</Type.Heading>
          <Type.Body>{ cask.name }</Type.Body>
        </CaskListItemContainers.Header>
        <CaskListItemContainers.Body>
          <Pill.SmallPill flavourProfile={ cask.flavourProfile }>{ cask.flavourProfile || 'Other' }</Pill.SmallPill>
        </CaskListItemContainers.Body>
      </Button.DispatchButton>
    </CaskListItemContainers.CaskListItem>
  );
};
