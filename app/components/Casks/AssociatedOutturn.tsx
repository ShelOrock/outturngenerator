//Dependency Libraries
import * as React from 'react';
//Dependency Functions
import { useTypedSelector } from '../../utils';

//Styled Components
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledDiv: {
    MainDiv,
    PaddedDiv,
    Row
  },
  StyledType: { Body },
  StyledNavigation: { LinkButton }
 } = StyledComponents

export default () => {

  const { allOutturns, activeCask } = useTypedSelector(state => state);

  const renderOutturnName = ():string => {
    return allOutturns.find(outturn => outturn.id === activeCask.outturnId).name
  }

  const evaluateCaskAssignment = activeCask.outturnId
    ? <PaddedDiv paddingTop='1rem' paddingBottom='1rem' paddingLeft='1rem' paddingRight='1rem'>
        <Row justifyContent='space-between' alignItems='center'>
          <Body>This cask is assigned to { renderOutturnName() }</Body>
          <LinkButton to={ `/outturn/${ activeCask.outturnId }` }>{ 'Go to Outturn >' }</LinkButton>
        </Row>
      </PaddedDiv>
    : <PaddedDiv paddingTop='1rem' paddingBottom='1rem' paddingLeft='1rem' paddingRight='1rem'>
        <Body>This cask is not assigned to an outturn.</Body>
      </PaddedDiv>

  return (
    <PaddedDiv paddingTop='1rem'>
      <MainDiv>
        { !!Object.keys(activeCask).length &&  evaluateCaskAssignment }
      </MainDiv>
    </PaddedDiv>
  )
}