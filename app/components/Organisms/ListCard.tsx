import React from 'react';

import { ButtonProps, GenericComponentProps } from '../../types';
import { Button, Card } from '../Atoms';

interface ComponentProps extends GenericComponentProps {
  color: string;
  cardAction: ButtonProps;
};

const ListCard: React.FC<ComponentProps> = ({
  color,
  cardAction
}) => (
  <Card.Card color={ color }>
    <Button.Button
      variant={ 'tertiary' }
      dispatch={ cardAction.dispatch }
      onClick={ cardAction.onClick }
      >
      <Card.Content />
    </Button.Button>
    <Card.Actions />
  </Card.Card>
);

export default ListCard;