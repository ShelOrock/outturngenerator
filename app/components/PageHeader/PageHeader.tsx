import * as React from 'react';

import ButtonManager from '../Button/ButtonManager';
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledType: { PageTitle },
  StyledDiv: { Row }
} = StyledComponents;

export default ({ pageTitle, addButtonProps = {}, deleteButtonProps = {} }: any) =>(
  <Row justifyContent='space-between'>
    <Row alignItems='center'>
      <PageTitle>{ pageTitle }</PageTitle>
      { Object.keys(addButtonProps).length
      ? <ButtonManager 
            size={ addButtonProps.size }
            disabled={ addButtonProps.disabled }
            variant={ addButtonProps.variant }
            props={ addButtonProps.onClickProps }
          />
      : null
      }
    </Row>
    { Object.keys(deleteButtonProps).length
    ? <ButtonManager
        size={ deleteButtonProps.size }
        disabled={ deleteButtonProps.disabled }
        variant={ deleteButtonProps.variant }
        props={ deleteButtonProps.onClickProps }
        />
    : null
    }
  </Row>
)