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
  StyledLink: { LinkButton },
  StyledDiv: {
    MainDiv,
    Row,
    Column,
  },
  StyledType: {
    Header,
    Subheader,
    Subtitle,
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
                  <Subheader textAlign='left'>{ name ? name.toUpperCase() : null }</Subheader>
                  <Header textAlign='left'>{ price ? `$${ price }` : null }</Header>
                  <FlavourStrip flavourProfile={ assignColorPill(flavourProfile) }>
                    <Subheader color='white' textAlign='left'>{ flavourProfile ? flavourProfile.toUpperCase() : null }</Subheader>
                  </FlavourStrip>
                </ActiveCaskHeader>
                <List>
                  <Row justifyContent='space-between'>
                    <ListItem>
                      <Subtitle>Age:</Subtitle>
                      <Body>{ age } years</Body>
                    </ListItem>
                    <ListItem>
                      <Subtitle>Date distilled:</Subtitle>
                      <Body>{ date }</Body>
                    </ListItem>
                  </Row>
                  <ListItem>
                    <Subtitle>Region:</Subtitle>
                    <Body>{ region }</Body>
                  </ListItem>
                  <ListItem>
                    <Subtitle>Cask type:</Subtitle>
                    <Body>{ caskType }</Body>
                  </ListItem>
                  { grapeVariety ? (
                    <ListItem>
                      <Subtitle>Grape variety:</Subtitle>
                      <Body>{ grapeVariety }</Body>
                    </ListItem>
                  ) : null }
                  <Row justifyContent='space-between'>
                    <ListItem>
                      <Subtitle>Outturn:</Subtitle>
                      <Body>{ bottleOutturn }</Body>
                    </ListItem>
                    <ListItem>
                      <Subtitle>Allocation:</Subtitle>
                      <Body>{ allocation }</Body>
                    </ListItem>
                  </Row>
                  <ListItem>
                    <Subtitle>Tasting Note:</Subtitle>
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
