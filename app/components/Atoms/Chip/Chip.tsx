import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledChip } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {
  color: string;
  text: string;
};

const Chip: React.FC<ComponentProps> = ({
  color = 'default',
  text,
}) => <StyledChip.Chip color={ color }>{ text }</StyledChip.Chip>;

export default Chip;
