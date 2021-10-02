import React from 'react';

import { Card, Button } from '../Atoms';
import CardActions from '../Molecules/CardActions';
import CardContent from '../Molecules/CardContent';

import { GenericComponentProps, ButtonProps } from '../../types';
import { DraggableProvided } from 'react-beautiful-dnd';

interface ComponentProps extends GenericComponentProps {
  color?: string;
  cardAction?: ButtonProps;
  heading: string;
  subheading: string;
  body: string;
  chips: JSX.Element;
  primaryAction: ButtonProps;
  secondaryAction?: ButtonProps;
  provided?: DraggableProvided;
  ref?: React.ReactNode;
};

const GridCard: React.FC<ComponentProps> = ({
  color = 'default',
  cardAction = {},
  heading,
  subheading,
  body,
  chips,
  primaryAction,
  secondaryAction = {}
}) => (
  <Card.Card color={ color }>
    <Button.Button
      variant={ 'tertiary' }
      dispatch={ cardAction.dispatch }
      onClick={ cardAction.onClick }
    >
      <CardContent
        heading={ heading }
        subheading={ subheading }
        body={ body }
        chips={ chips }
      />
    </Button.Button>
    { chips }
    <CardActions
      primaryAction={ primaryAction }
      secondaryAction={ secondaryAction }
    />
  </Card.Card>
);

export default GridCard;