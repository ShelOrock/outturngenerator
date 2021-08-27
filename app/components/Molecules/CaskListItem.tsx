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
  activeUser: User;
  onCheck: InputOnChangeType;
};

export default ({
  cask = {} as Cask,
  markedCasks = [],
  activeUser = {} as User,
  onCheck
}: ComponentProps): JSX.Element => {

  const dispatch = useDispatch()
  
  return (
    <CaskListItemContainers.CaskListItem>
      <CaskListItemContainers.Header>
        { activeUser.userType !== 'Guest' && (
          <Form.Checkbox
            type='checkbox'
            name={ cask.id }
            checked={ markedCasks.includes(cask.id) }
            onChange={ () => onCheck() }
          />
        ) }
        <CaskListItemContainers.Buttons>
          { activeUser.userType !== 'Guest' && <Link.LinkButton to={ `/edit/${ cask.id }` }>Edit</Link.LinkButton>}
          { activeUser.userType !== 'Guest' && (
            <Button.DispatchButton
              variant={ 'tertiary' }
              dispatch={ dispatch }
              onClick={ () => createButton(
                modalActions.setModal,
                'X Delete'
                //TODO
              ) }
            />
          ) }
        </CaskListItemContainers.Buttons>
      </CaskListItemContainers.Header>
      <Button.DispatchButton
        variant={ 'tertiary' }
        dispatch={ dispatch }
        onClick={ () => activeCaskThunks.getActiveCask(cask.id) }
      >
      <CaskListItemContainers.Body>
        <Type.Heading>{ cask.caskNumber ? `Cask No. ${ cask.caskNumber }` : 'Untitled Cask' }</Type.Heading>
        <Type.Body>{ cask.name }</Type.Body>
        <Pill.SmallPill flavourProfile={ cask.flavourProfile }>{ cask.flavourProfile || 'Other' }</Pill.SmallPill>
      </CaskListItemContainers.Body>
      </Button.DispatchButton>
    </CaskListItemContainers.CaskListItem>
  );
};
