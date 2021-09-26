import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledChip } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {
  color: string;
};

const Chip: React.FC<ComponentProps> = ({
  color = 'default',
  children
}) => <StyledChip.Chip color={ color }>{ children }</StyledChip.Chip>;

export default Chip;
