import * as React from "react";
import { useTypedSelector } from "../../utils";

import * as StyledComponents from "../styledcomponents/index";
const {
  StyledCask: {
    FlavourStrip,
    ActiveCaskHeader,
    ImageContainer
  },
  StyledList: { List, ListItem },
  StyledNavigation: { LinkButton },
  StyledDiv: { Row, Column, PaddedDiv },
  StyledType: {
    Header,
    SmallListItemHeader,
    Body
  } } = StyledComponents;

export default () => {
  const activeCask = useTypedSelector((state) => state.activeCask);

  const {
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

  return (
    <Row>
      { !!Object.keys(activeCask).length && (
        <Column>
          <PaddedDiv paddingTop='0.5rem' paddingBottom='0.5rem'>
            <LinkButton to={`/edit/${activeCask.id}`}>Edit</LinkButton>
          </PaddedDiv>
          <Row>
            <Row>
              <ImageContainer>Insert image here</ImageContainer>
              <Column>
                <ActiveCaskHeader>
                  <Header textAlign="left">
                    CASK NO. {caskNumber && caskNumber.toUpperCase() }
                  </Header>
                  <SmallListItemHeader textAlign="left">
                    {name && name.toUpperCase() }
                  </SmallListItemHeader>
                  <Header textAlign="left">{price && `$${price}` }</Header>
                  <FlavourStrip flavourProfile={flavourProfile}>
                    <SmallListItemHeader color="white" textAlign="left">
                      { flavourProfile && flavourProfile.toUpperCase() }
                    </SmallListItemHeader>
                  </FlavourStrip>
                </ActiveCaskHeader>
                <List>
                  <Row justifyContent="space-between">
                    <ListItem>
                      <SmallListItemHeader>Age:</SmallListItemHeader>
                      <Body>{age} years</Body>
                    </ListItem>
                    <ListItem>
                      <SmallListItemHeader>Date distilled:</SmallListItemHeader>
                      <Body>{date}</Body>
                    </ListItem>
                  </Row>
                  <ListItem>
                    <SmallListItemHeader>Region:</SmallListItemHeader>
                    <Body>{region}</Body>
                  </ListItem>
                  <ListItem>
                    <SmallListItemHeader>Cask type:</SmallListItemHeader>
                    <Body>{caskType}</Body>
                  </ListItem>
                  <Row justifyContent="space-between">
                    <ListItem>
                      <SmallListItemHeader>Outturn:</SmallListItemHeader>
                      <Body>{bottleOutturn}</Body>
                    </ListItem>
                    <ListItem>
                      <SmallListItemHeader>Allocation:</SmallListItemHeader>
                      <Body>{allocation}</Body>
                    </ListItem>
                  </Row>
                  <ListItem>
                    <SmallListItemHeader>Tasting Note:</SmallListItemHeader>
                    <Body>{description}</Body>
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
