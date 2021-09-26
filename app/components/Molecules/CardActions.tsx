import React from 'react';

import { StyledCard } from '../styledcomponents';
import { GenericComponentProps, ButtonProps } from '../../types';
import { Button } from '../Atoms';

interface ComponentProps extends GenericComponentProps {
  primaryAction?: ButtonProps;
  secondaryAction?: ButtonProps;
};

const CardActions: React.FC<ComponentProps> = ({
  primaryAction = {},
  secondaryAction = {}
}) => (
  <StyledCard.Actions>
    <Button.Button
      variant={ 'tertiary' }
      dispatch={ primaryAction.dispatch }
      onClick={ () => primaryAction.onClick }
    >
      { primaryAction.text }
    </Button.Button>
    <Button.Button
      variant={ 'tertiary' }
      dispatch={ secondaryAction.dispatch }
      onClick={ () => secondaryAction.onClick }
    >
      { secondaryAction.text }
    </Button.Button>
  </StyledCard.Actions>
);

export default CardActions;
