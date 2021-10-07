import React from 'react';

import { Card, Button } from '../Atoms';
import CardToolbar from '../Molecules/CardToolbar';
import CardContent from '../Molecules/CardContent';
import CardActions from '../Molecules/CardActions';

import { GenericComponentProps, ButtonProps, InputOnChangeType } from '../../types';
import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';

interface ComponentProps extends GenericComponentProps {
  color?: string;
  dragHandleProps?: DraggableProvidedDragHandleProps;
  cardAction?: any //TODO;
  name?: string;
  checked?: boolean;
  onChange?: InputOnChangeType;
  heading: string;
  subheading: string;
  body?: string;
  chips?: JSX.Element;
  primaryAction: ButtonProps;
  secondaryAction?: ButtonProps;
};

const GridCard: React.FC<ComponentProps> = ({
  color = 'default',
  dragHandleProps,
  cardAction = () => {},
  name,
  checked,
  onChange,
  heading,
  subheading,
  body = '',
  chips = null,
  primaryAction,
  secondaryAction = {},
}) => (
  <Card.Main color={ color }>
    <CardToolbar
      color={ color }
      name={ name }
      checked={ checked }
      onChange={ onChange }
      dragHandleProps={ dragHandleProps }
    />
    <Button.Button
      variant={ 'tertiary' }
      onClick={ cardAction }
    >
      <CardContent
        heading={ heading }
        subheading={ subheading }
        body={ body }
      />
    </Button.Button>
    { chips }
    <CardActions
      primaryAction={ primaryAction }
      secondaryAction={ secondaryAction }
    />
  </Card.Main>
);

export default GridCard;