import * as React from 'react';

import ActiveCaskContainer from "../../OutturnCasks/ActiveCaskContainer";
import AssociatedOutturn from './AssociatedOutturn';
import * as StyledComponents from '../../styledcomponents';
const { StyledDiv: { Column } } = StyledComponents;

export default () => {
  <Column width='100%'>
    <ActiveCaskContainer />
    <AssociatedOutturn />
  </Column>
}