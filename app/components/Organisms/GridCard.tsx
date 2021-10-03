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
  cardAction?: ButtonProps;
  name?: string;
  checked?: boolean;
  onChange?: InputOnChangeType;
  heading: string;
  subheading: string;
  body: string;
  chips: JSX.Element;
  primaryAction: ButtonProps;
  secondaryAction?: ButtonProps;
};

const GridCard: React.FC<ComponentProps> = ({
  color = 'default',
  dragHandleProps,
  cardAction = {},
  name,
  checked,
  onChange,
  heading,
  subheading,
  body,
  chips,
  primaryAction,
  secondaryAction = {},
}) => (
  <Card.Main color={ color }>
    <CardToolbar
      name={ name }
      checked={ checked }
      onChange={ onChange }
      dragHandleProps={ dragHandleProps }
    />
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
  </Card.Main>
);

export default GridCard;