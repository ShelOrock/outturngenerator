import React from 'react';

import { StyledCard } from '../styledcomponents';
import { Type } from '../Atoms';

import { GenericComponentProps } from '../../types';

interface ComponentProps extends GenericComponentProps {
  heading: string;
  subheading: string;
  body?: string;
};

const CardContent: React.FC<ComponentProps> = ({
  heading,
  subheading,
  body = '',
}) => (
  <StyledCard.Content>
    <Type.Heading>{ heading }</Type.Heading>
    <Type.SubHeading>{ subheading }</Type.SubHeading>
    { body && <Type.Body>{ body }</Type.Body> }
  </StyledCard.Content>
);

export default CardContent;
