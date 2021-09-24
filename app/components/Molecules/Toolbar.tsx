import React from 'react';

import { ButtonProps, GenericComponentProps } from '../../types';
import { Button, Type } from '../Atoms';
import { Row } from '../styledcomponents/Div';

interface ComponentProps extends GenericComponentProps {
  title: string;
  primaryButton: ButtonProps;
  secondaryButton?: ButtonProps;
};

const Toolbar: React.FC<ComponentProps> = ({
  title='',
  primaryButton,
  secondaryButton
}) => (
  <Row>
    <Type.Title>{ title }</Type.Title>
    <Row>
      <Button.Button
        dispatch={ primaryButton.dispatch }
        onClick={ () => primaryButton.onClick }
        variant={ 'primary' }
      >
        { primaryButton.text }
      </Button.Button>
      <Button.Button
        dispatch={ secondaryButton.dispatch }
        onClick={ () => secondaryButton.onClick }
        variant={ 'secondary' }
      >
        { secondaryButton.text }
      </Button.Button>
    </Row>
  </Row>
);

export default Toolbar;
