import React from 'react';

import { ActiveCaskContainers } from '../../Containers';
import { Type } from '../../Atoms';

import { GenericComponentProps } from '../../../types';

interface ComponentProps extends GenericComponentProps {
  title: string;
  body: string | number;
};

const BodyModule: React.FC<ComponentProps> = ({ 
  title = '',
  body = '',
}) => (
  <ActiveCaskContainers.BodyModule>
    <Type.BodyTitle>{ title }</Type.BodyTitle>
    <Type.Body>{ body }</Type.Body>
  </ActiveCaskContainers.BodyModule>
);

export default BodyModule;
