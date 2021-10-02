import React from 'react';

import { GenericComponentProps } from '../../../types';

import { CaskListItemContainers } from '../../Containers';
import { Chip } from '../../Atoms';

interface ComponentProps extends GenericComponentProps {
  color: string;
};

const Body: React.FC<ComponentProps> = ({ color = 'default' }) => (
  <CaskListItemContainers.Body>
    <Chip.Chip
      color={ color } 
      text={ color }
    />
  </CaskListItemContainers.Body>
);

export default Body;
