import * as React from 'react';
import { useTypedSelector, assignColorPill } from '../../utils';

import * as StyledComponents from '../styledcomponents/index';
const {
  StyledCask: {
    FlavourStrip,
    ActiveCaskHeader,
    List,
    ListItem,
    ImageContainer,
  },
  StyledNavigation: { LinkButton },
  StyledDiv: {
    MainDiv,
    Row,
    Column,
  },
  StyledType: {
    Header,
    SmallListItemHeader,
    Body
  }
} = StyledComponents;

export default () => {

  const activeCask = useTypedSelector(state => state.activeCask)

  const {
    caskNumber,
    name,
    flavourProfile,
    price,
    age,
    date,
    region,
    caskType,
    grapeVariety,
    bottleOutturn,
    allocation,
    description
  } = activeCask

  return (
    <div>
    { 
    Object.keys(activeCask).length
      ? (
    <MainDiv>
          <LinkButton to={ `/edit/${ activeCask.id }/step1`}>Edit</LinkButton>
          <Row>
            <Row>
              <ImageContainer>Insert image here</ImageContainer>
              <Column>
                <ActiveCaskHeader>
                  <Header textAlign='left'>CASK NO. { caskNumber ? caskNumber.toUpperCase() : null }</Header>
                  <SmallListItemHeader textAlign='left'>{ name ? name.toUpperCase() : null }</SmallListItemHeader>
                  <Header textAlign='left'>{ price ? `$${ price }` : null }</Header>
                  <FlavourStrip flavourProfile={ assignColorPill(flavourProfile) }>
                    <SmallListItemHeader color='white' textAlign='left'>{ flavourProfile ? flavourProfile.toUpperCase() : null }</SmallListItemHeader>
                  </FlavourStrip>
                </ActiveCaskHeader>
                <List>
                  <Row justifyContent='space-between'>
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
                  { grapeVariety ? (
                    <ListItem>
                      <SmallListItemHeader>Grape variety:</SmallListItemHeader>
                      <Body>{ grapeVariety }</Body>
                    </ListItem>
                  ) : null }
                  <Row justifyContent='space-between'>
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
    </MainDiv>
  )
  : null
}
</div>
  )
}
