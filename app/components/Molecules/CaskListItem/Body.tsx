import React from 'react';

import { GenericComponentProps } from '../../../types';

import { CaskListItemContainers } from '../../Containers';
import { Pill } from '../../Atoms';

interface ComponentProps extends GenericComponentProps {
  flavourProfile: string;
};

const Body: React.FC<ComponentProps> = ({ flavourProfile = '' }) => (
  <CaskListItemContainers.Body>
    <Pill.SmallPill flavourProfile={ flavourProfile }>{ flavourProfile }</Pill.SmallPill>
  </CaskListItemContainers.Body>
);

export default Body;
