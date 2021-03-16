import * as React from 'react';

import InputManager from '../Form/InputManager';
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledDiv: { Row }
} = StyledComponents;

export default ({ props }) => {
  return <Row>
  { props.map((input, idx) => <InputManager key={ idx } props={ input } /> )}
  </Row>
};