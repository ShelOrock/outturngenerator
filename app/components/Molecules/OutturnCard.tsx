import React from 'react';

import { OutturnCardContainers } from '../Containers';
import {
  Input,
  Button,
  Link,
  Type
} from '../Atoms';

import {
    GenericComponentProps,
    AppDispatch,
    ActionFunctionType,
    InputOnChangeType,
    Outturn,
    Cask,
    User,
  } from '../../types';

interface ComponentProps extends GenericComponentProps {
  outturn: Outturn;
  markedOutturns: String[];
  casks: Cask[];
  handleOnCheck: InputOnChangeType;
  handleSetModal: ActionFunctionType;
  user: User;
};

const OutturnCard: React.FC<ComponentProps> = ({
  outturn = {} as Outturn,
  markedOutturns = [],
  casks = [],
  handleOnCheck,
  handleSetModal,
  user = {} as User,
}) => (
  <OutturnCardContainers.Main>
    <OutturnCardContainers.Toolbar>
      { user.userType !== 'Guest' && (
        <Input.Checkbox
          name={ outturn.id }
          checked={ markedOutturns.includes(outturn.id) }
          onChange={ handleOnCheck }
        />
      ) }
      { user.userType !== 'Guest' && (
        <Button.Button
          variant={ 'tertiary' }
          onClick={ handleSetModal }
        >X Delete</Button.Button>
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
