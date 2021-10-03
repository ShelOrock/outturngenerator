import React from 'react';

import { StyledCard } from '../styledcomponents';

import { GenericComponentProps, InputOnChangeType } from '../../types';
import { Input } from '../Atoms';
import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';

interface ComponentProps extends GenericComponentProps {
  name: string;
  checked: boolean;
  onChange: InputOnChangeType;
  dragHandleProps: DraggableProvidedDragHandleProps;
};

const CardToolbar: React.FC<ComponentProps> = ({
  name,
  checked,
  onChange,
  dragHandleProps
}) => (
  <StyledCard.Toolbar>
    <Input.Checkbox
      name={ name }
      checked={ checked }
      onChange={ onChange }
    />
    <div { ...dragHandleProps }>Move Icon</div>
  </StyledCard.Toolbar>
);

export default CardToolbar;