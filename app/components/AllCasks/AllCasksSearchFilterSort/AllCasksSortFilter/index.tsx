import * as React from 'react';

import AllCasksSort from './AllCasksSort';
import AllCasksFilter from '../AllCasksSortFilter/AllCasksFilter';
import * as StyledComponents from '../../../styledcomponents';
const { StyledDiv: { Row } } = StyledComponents;

export default (sortProps) => {
  return (
    <Row>
      <AllCasksSort { ...sortProps }/>
      <AllCasksFilter />
    </Row>
  )
}