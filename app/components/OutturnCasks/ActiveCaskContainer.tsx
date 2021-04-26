//Dependency Libraries
import * as React from 'react';

//Components
import ActiveCask from './ActiveCask';
//Styled Components
import * as StyledComponents from '../styledcomponents/index';
const { StyledDiv: { MainDiv } } = StyledComponents;

export default () => (
  <MainDiv>
    <ActiveCask />
  </MainDiv>
)