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
  <Card.Main color={ color }>
    <Button.Button
      variant={ 'tertiary' }
      onClick={ cardAction.onClick }
    >
      <Card.Content />
    </Button.Button>
    <Card.Actions />
  </Card.Main>
);

export default ListCard;