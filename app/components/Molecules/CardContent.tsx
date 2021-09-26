import React from 'react';

import { StyledCard } from '../styledcomponents';
import { Type } from '../Atoms';

import { GenericComponentProps } from '../../types';

interface ComponentProps extends GenericComponentProps {
  heading: string;
  subheading: string;
  body: string;
  chips: JSX.Element;
};

const CardContent: React.FC<ComponentProps> = ({
  heading,
  subheading,
  body,
  chips,
}) => (
  <StyledCard.Content>
    <Type.Heading>{ heading }</Type.Heading>
    <Type.SubHeading>{ subheading }</Type.SubHeading>
    <Type.Body>{ body }</Type.Body>
    { chips }
  </StyledCard.Content>
);

export default CardContent;
