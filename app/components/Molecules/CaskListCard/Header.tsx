import React from 'react';

import { GenericComponentProps } from '../../../types';

import { CaskListItemContainers } from '../../Containers';
import { Type } from '../../Atoms';

interface ComponentProps extends GenericComponentProps {
  caskNumber: string;
  name: string;
};

const Header: React.FC<ComponentProps> = ({
  caskNumber = 'Unnumbered Cask',
  name = ''
}) => (
  <CaskListItemContainers.Header>
    <Type.Heading>{ caskNumber }</Type.Heading>
    <Type.Body>{ name }</Type.Body>
  </CaskListItemContainers.Header>
);

export default Header;
