import React from 'react';
import { useDispatch } from 'react-redux';

import {
  GenericComponentProps,
  InputOnChangeType,
  Outturn,
  Cask,
  User
} from '../../types';

import { OutturnCardContainers } from '../Containers';
import {
  Form,
  Button,
  Link,
  Type
} from '../Atoms';

import { modalActions } from '../../redux/actions';

interface ComponentProps extends GenericComponentProps {
  outturn: Outturn;
  markedOutturns: String[];
  casks: Cask[];
  onCheck: InputOnChangeType;
  user: User;
};

export default ({
  outturn = {} as Outturn,
  markedOutturns = [],
  casks = [],
  onCheck,
  user = {} as User,
}: ComponentProps): JSX.Element => {

  const dispatch = useDispatch();

  return (
    <OutturnCardContainers.OutturnCard>
      <OutturnCardContainers.Toolbar>
        { user.userType !== 'Guest' && (
          <Form.Checkbox
            type={ 'checkbox' }
            name={ outturn.id }
            checked={ markedOutturns.includes(outturn.id) }
            onChange={ () => onCheck() }
          />
        ) }
        { user.userType !== 'Guest' && (
          <Button.DispatchButton
            dispatch={ dispatch }
            variant={ 'tertiary' }
            onClick={ () => modalActions.setModal({
              modalHeader: `Are you sure you want to delete ${ outturn.name }?`,
              confirmButton: null //TODO
            }) }
          >X Delete</Button.DispatchButton>
        ) }
      </OutturnCardContainers.Toolbar>
      <Link.LinkDiv to={ `/outturn/${ outturn.id }` }>
        <OutturnCardContainers.Header>
          <Type.Heading>{ outturn.name }</Type.Heading>
        </OutturnCardContainers.Header>
        <OutturnCardContainers.Body>
          <Type.Body>{ outturn.description }</Type.Body>
          <OutturnCardContainers.Pills>
            {/*TODO*/}
            { casks.length > 3 && <Type.Body>{ casks.length - 3 } More</Type.Body>}
          </OutturnCardContainers.Pills>
        </OutturnCardContainers.Body>
      </Link.LinkDiv>
    </OutturnCardContainers.OutturnCard>
  )
}