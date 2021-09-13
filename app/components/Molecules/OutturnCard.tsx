import React from 'react';

import { OutturnCardContainers } from '../Containers';
import {
  Input,
  Button,
  Link,
  Type
} from '../Atoms';

import { modalActions } from '../../redux/actions';

import {
    GenericComponentProps,
    InputOnChangeType,
    AppDispatch,
    Outturn,
    Cask,
    User,
    AppThunk,
  } from '../../types';

interface ComponentProps extends GenericComponentProps {
  outturn: Outturn;
  markedOutturns: String[];
  casks: Cask[];
  handleOnCheck: InputOnChangeType;
  handleSetModal: () => AppThunk;
  user: User;
  dispatch: AppDispatch
};

const OutturnCard: React.FC<ComponentProps> = ({
  outturn = {} as Outturn,
  markedOutturns = [],
  casks = [],
  handleOnCheck,
  handleSetModal,
  user = {} as User,
  dispatch
}) => (
  <OutturnCardContainers.Main>
    <OutturnCardContainers.Toolbar>
      { user.userType !== 'Guest' && (
        <Input.Checkbox
          type={ 'checkbox' }
          name={ outturn.id }
          checked={ markedOutturns.includes(outturn.id) }
          onChange={ handleOnCheck }
        />
      ) }
      { user.userType !== 'Guest' && (
        <Button.DispatchButton
          dispatch={ dispatch }
          variant={ 'tertiary' }
          onClick={ handleSetModal }
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
  </OutturnCardContainers.Main>
);

export default OutturnCard;
