//Dependency Libraries
import * as React from "react";
//Dependency Functions
import { useTypedSelector, createButton } from "../../utils";

//Components
import ButtonManager from '../Button/ButtonManager';
//StyledComponents
import * as StyledComponents from "../styledcomponents/index";
const {
  StyledCask: {
    FlavourStrip,
    ActiveCaskHeader,
    ImageContainer
  },
  StyledList: { List, ListItem },
  StyledNavigation: { LinkButton },
  StyledDiv: {
    Row,
    Column,
    PaddedDiv
  },
  StyledType: {
    Heading,
    CaskTitle,
    FlavourProfileTitle,
    SmallListItemHeader,
    Body
  }
} = StyledComponents;

//Redux actions
import * as actions from '../../redux/actions';
const { modalActions: { setModal } } = actions

//Redux thunks
import * as thunks from '../../redux/thunks';
const { allCasksThunks: { deleteCask } } = thunks;

//Types
import { ButtonProps, Modal } from '../../types';

export default () => {

  const {
    activeCask,
    activeOutturn,
    activeUser
  } = useTypedSelector(state => state);
  const {
    id,
    caskNumber,
    name,
    flavourProfile,
    price,
    age,
    date,
    region,
    caskType,
    bottleOutturn,
    allocation,
    description,
  } = activeCask;

  const evaluateUserType = activeUser.userType == 'Admin' || activeUser.userType == 'Standard'

  const deleteCaskModal: Modal = {
    modalHeader: `Are you sure you want to delete ${ caskNumber } ${ name }`,
    confirmButton: {
      text: `Delete Cask no. ${ caskNumber }`,
      arguments: [ id, id, activeOutturn.id ],
      onClick: deleteCask
    },
  }

  const deleteCaskButtonProps: ButtonProps = {
    size: 'small',
    variant: 'tertiary',
    onClick: createButton(
      setModal,
      "X Delete",
      deleteCaskModal
    )
  }

  return (
    <Row>
      { !!Object.keys(activeCask).length && (
        <Column width='100%'>
          <Row justifyContent='space-between' alignItems='center'>
            <PaddedDiv
              paddingTop='0.5rem'
              paddingBottom='0.5rem'
              paddingLeft='0.5rem'
              paddingRight='0.5rem'
            >
              { evaluateUserType && <LinkButton to={`/edit/${ activeCask.id }`}>Edit</LinkButton> }
            </PaddedDiv>
            <PaddedDiv
              paddingTop='0.5rem'
              paddingBottom='0.5rem'
              paddingLeft='0.5rem'
              paddingRight='0.5rem'
            >
              { evaluateUserType && <ButtonManager { ...deleteCaskButtonProps } /> }
            </PaddedDiv>
          </Row>
          <Row>
            <Row>
              <ImageContainer>Insert image here</ImageContainer>
              <Column width='100%'>
                <ActiveCaskHeader>
                  <Heading textAlign="left">
                    CASK NO. {caskNumber && caskNumber.toUpperCase() }
                  </Heading>
                  <CaskTitle textAlign="left">
                    { name && name.toUpperCase() }
                  </CaskTitle>
                  <Heading textAlign="left">{ price && `$${price}` }</Heading>
                  <FlavourStrip flavourProfile={ flavourProfile }>
                    <FlavourProfileTitle>
                      { flavourProfile && flavourProfile.toUpperCase() }
                    </FlavourProfileTitle>
                  </FlavourStrip>
                </ActiveCaskHeader>
                <List>
                  <Row justifyContent="space-between">
                    <ListItem>
                      <SmallListItemHeader>Age:</SmallListItemHeader>
                      <Body>{ age } years</Body>
                    </ListItem>
                    <ListItem>
                      <SmallListItemHeader>Date distilled:</SmallListItemHeader>
                      <Body>{ date }</Body>
                    </ListItem>
                  </Row>
                  <ListItem>
                    <SmallListItemHeader>Region:</SmallListItemHeader>
                    <Body>{ region }</Body>
                  </ListItem>
                  <ListItem>
                    <SmallListItemHeader>Cask type:</SmallListItemHeader>
                    <Body>{ caskType }</Body>
                  </ListItem>
                  <Row justifyContent="space-between">
                    <ListItem>
                      <SmallListItemHeader>Outturn:</SmallListItemHeader>
                      <Body>{ bottleOutturn }</Body>
                    </ListItem>
                    <ListItem>
                      <SmallListItemHeader>Allocation:</SmallListItemHeader>
                      <Body>{ allocation }</Body>
                    </ListItem>
                  </Row>
                  <ListItem>
                    <SmallListItemHeader>Tasting Note:</SmallListItemHeader>
                    <Body>{ description }</Body>
                  </ListItem>
                </List>
              </Column>
            </Row>
          </Row>
        </Column>
      ) }
    </Row>
  );
};
