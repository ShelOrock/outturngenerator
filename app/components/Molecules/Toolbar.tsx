import React from 'react';

import { ButtonProps, GenericComponentProps } from '../../types';
import { Button, Type } from '../Atoms';
import { Column, Row } from '../styledcomponents/Div';

interface ComponentProps extends GenericComponentProps {
  title: string;
  primaryAction: ButtonProps;
  secondaryAction?: ButtonProps;
};

const Toolbar: React.FC<ComponentProps> = ({
  title='',
  primaryAction,
  secondaryAction
}) => (
  <Column>
    <Type.Title>{ title }</Type.Title>
    <Row>
      <Button.Button
        onClick={ () => primaryAction.onClick }
        variant={ 'primary' }
      >
        { primaryAction.text }
      </Button.Button>
      <Button.Button
        onClick={ () => secondaryAction.onClick }
        variant={ 'secondary' }
      >
        { secondaryAction.text }
      </Button.Button>
    </Row>
  </Column>
);

export default Toolbar;
