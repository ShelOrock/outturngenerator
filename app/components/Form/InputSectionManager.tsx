import * as React from 'react';

import InputGroupManager from './InputGroupManager';
import InputManager from './InputManager';
import * as StyledComponents from '../styledcomponents/index'
const {
  StyledType: { Subheader },
  StyledDiv: { Row, Column },
} = StyledComponents;

export default ({ sectionHeaderProps, inputProps }) => {
  return <Row>
    <Subheader> { sectionHeaderProps } </Subheader>
    <Column>
    {
      inputProps.map((input, idx) => Array.isArray(input)
      ? <InputGroupManager key={ idx } props={ input } />
      : <InputManager key={ idx } props={ input } /> )
    }
    </Column>
  </Row>
}