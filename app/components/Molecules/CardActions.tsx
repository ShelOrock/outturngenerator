import React from 'react';

import { GenericComponentProps, ButtonProps } from '../../types';
import { Card, Button } from '../Atoms';

interface ComponentProps extends GenericComponentProps {
  primaryAction?: ButtonProps;
  secondaryAction?: ButtonProps;
};

const CardActions: React.FC<ComponentProps> = ({
  primaryAction = {},
  secondaryAction = {}
}) => (
  <Card.Actions>
    <Button.Button
      variant={ 'tertiary' }
      onClick={ () => primaryAction.onClick }
    >
      { primaryAction.text }
    </Button.Button>
    <Button.Button
      variant={ 'tertiary' }
      onClick={ () => secondaryAction.onClick }
    >
      { secondaryAction.text }
    </Button.Button>
  </Card.Actions>
);

export default CardActions;
