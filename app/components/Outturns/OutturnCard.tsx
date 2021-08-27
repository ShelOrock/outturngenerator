//Dependency Libraries
import * as React from 'react';
import { useDispatch } from 'react-redux';
//Dependency Functions
import {
  useTypedSelector,
  truncateText,
  createButton
} from '../../utils';

//Components
import ButtonManager from '../Button/ButtonManager';
//Styled Components
import * as StyledComponents from '../styledcomponents';
const {
  StyledType: { Heading, Body },
  StyledCard: { Card },
  StyledCask: { FlavourPill },
  StyledDiv: { PaddedDiv, Row },
  StyledLink: { LinkDiv },
  StyledForm: { Checkbox }
} = StyledComponents;

//Redux actions
import * as actions from '../../redux/actions';
const {
  markOutturnActions: { markOutturn, unmarkOutturn },
  modalActions: { setModal }
} = actions;

//Redux thunks
import * as thunks from '../../redux/thunks';
const { outturnsThunks: { deleteOutturn } } = thunks;

//Types
import {
  OutturnCard,
  InputOnChangeType,
  Modal,
  ButtonProps
} from '../../types';

export default ({ outturn, sortMethod }: OutturnCard) => {

  const dispatch = useDispatch();

  const {
    markedOutturns,
    activeOutturn,
    activeUser
  } = useTypedSelector(state => state);
  const {
    id,
    name,
    description
  } = outturn

  const evaluateUserType = activeUser.userType == 'Admin' || activeUser.userType == 'Standard';

  const handleOnCheck: InputOnChangeType = e => {
    if(markedOutturns.includes(e.target.name)) dispatch(unmarkOutturn(e.target.name))
    else dispatch(markOutturn(e.target.name));
  }

  const checkOutturnCheckboxProps = {
    type: 'checkbox',
    name: id,
    checked: markedOutturns.includes(id),
    onChange: handleOnCheck
  }

  const deleteOutturnModalProps: Modal = {
    modalHeader: `Are you sure you want to delete ${ outturn.name }`,
    confirmButton: {
      text: 'Delete',
      arguments: [ outturn.id, activeOutturn.id, sortMethod ],
      onClick: deleteOutturn,
    },
  };

  const deleteOutturnButtonProps: ButtonProps = {
    size: 'small',
    variant: 'tertiary',
    onClick: createButton(
      setModal,
      'X Delete',
      deleteOutturnModalProps
    )
  }

  const renderFlavourPills = (): JSX.Element[] => (
    outturn
      .casks
      .slice(0, 3)
      .map((cask, idx) => (
        <FlavourPill
          width='300px'
          key={ idx }
          flavourProfile={ cask.flavourProfile }
        >
          { cask.caskNumber } { cask.name }
        </FlavourPill>
      ))
  );

  return (
    <Card>
      <Row justifyContent='space-between' alignItems='center'>
        { evaluateUserType && <Checkbox { ...checkOutturnCheckboxProps }/> }
        { evaluateUserType && <ButtonManager { ...deleteOutturnButtonProps } /> }
      </Row>
      <PaddedDiv paddingTop='1rem'>
        <LinkDiv to={ `/outturn/${ id }`}>
          <Heading>{ name }</Heading>
          <Body>{ description && truncateText(description) }</Body>
          { !!outturn.casks && !!outturn.casks.length &&
            <PaddedDiv
              paddingTop='1rem'
              paddingRight='1rem'
              paddingLeft='1rem'
              paddingBottom='1rem'
            >
              { renderFlavourPills() }
              { outturn.casks.length > 3 && <Body>+ { outturn.casks.length - 3 } More</Body> }
            </PaddedDiv>
          }
        </LinkDiv>
      </PaddedDiv>
    </Card>
  )
};