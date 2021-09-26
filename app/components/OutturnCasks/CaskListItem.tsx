//Dependency Libraries
import * as React from 'react';
import { useDispatch } from 'react-redux';

//Dependency Functions
import { useTypedSelector, createButton } from '../../utils';

//Components
// import ButtonManager from '../Button/ButtonManager';
//Styled Components
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledType: { SubHeading, Body },
  StyledDiv: { PaddedDiv, Row, Column },
  StyledNavigation: { LinkButton },
  StyledForm: { Checkbox },
  StyledCask: { ListItem, CaskListItemButton, FlavourPill }
} = StyledComponents;

//Redux Actions
import * as actions from "../../redux/actions";
const {
  markCaskActions: { markCask, unmarkCask },
  modalActions: { setModal },
} = actions;

//Redux Thunks
import * as thunks from "../../redux/thunks";
const {
  activeCaskThunks: { getActiveCask, },
  allCasksThunks: { deleteCask }
} = thunks;

//Types
import { ButtonProps, InputOnChangeType, Modal } from '../../types/index';

export default (cask, sortMethod: any) => {
  
  const dispatch = useDispatch();  

  const {
    activeOutturn,
    activeCask,
    markedCasks,
    activeUser
  } = useTypedSelector((state) => state);

  const evaluateUserType = activeUser.userType == 'Admin' || activeUser.userType == 'Standard';

  const handleOnCheck: InputOnChangeType = e => {
    if (markedCasks.includes(e.target.name)) dispatch(unmarkCask(e.target.name));
    else dispatch(markCask(e.target.name));
  };

  const checkCaskCheckboxProps = {
    type: 'checkbox',
    name: cask.id,
    checked: markedCasks.includes(cask.id),
    onChange: handleOnCheck
  }

  const deleteCaskModal: Modal = {
    modalHeader: `Are you sure you want to delete ${ cask.caskNumber } ${ cask.name }`,
    confirmButton: {
      text: `Delete Cask no. ${ cask.caskNumber }`,
      arguments: [
        activeCask.id,
        cask.id,
        activeOutturn.id,
        sortMethod 
      ],
      onClick: deleteCask
    }
  }

  const deleteCaskButtonProps: ButtonProps = {
    size: 'small',
    variant: 'tertiary',
    // onClick: createButton(
    //   setModal,
    //   "X Delete",
    //   deleteCaskModal
    // )
  }

  return (
    <ListItem flavourProfile={ cask.flavourProfile }>
      <Column>
        <Row alignItems="center" justifyContent="space-between">
          { evaluateUserType && <Checkbox { ...checkCaskCheckboxProps }/> }
          <Row alignItems='center' justifyContent='flex-end'>
            { evaluateUserType && <LinkButton to={ `/edit/${ cask.id }` }>Edit</LinkButton> }
            {/* { evaluateUserType && <ButtonManager { ...deleteCaskButtonProps } /> } */}
          </Row>
        </Row>
        <PaddedDiv paddingTop='1rem'>
          <CaskListItemButton onClick={() => dispatch(getActiveCask(cask.id)) }>
            <Column>
              <SubHeading> { cask.caskNumber ? `Cask No. ${cask.caskNumber}` : "Untitled Cask" }</SubHeading>
              <Body>{ cask.name }</Body>
              <PaddedDiv
                paddingTop='1rem'
                paddingRight='1rem'
                paddingBottom='1rem'
                paddingLeft='1rem'
              >
                <FlavourPill flavourProfile={ cask.flavourProfile }>{ cask.flavourProfile || 'Other' }</FlavourPill>
              </PaddedDiv>
            </Column>
          </CaskListItemButton>
        </PaddedDiv>
      </Column>
    </ListItem>
  )
}