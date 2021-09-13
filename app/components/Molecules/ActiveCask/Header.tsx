import React from 'react';

import { ActiveCaskContainers } from '../../Containers';
import {  Type } from '../../Atoms';

import { GenericComponentProps } from '../../../types';

interface ComponentProps extends GenericComponentProps {
  number: string;
  name: string;
  price: string;
};

const Header: React.FC<ComponentProps> = ({
  number = '',
  name = '',
  price = '',
}) => (
  <ActiveCaskContainers.Header>
    <Type.Heading>Cask NO. { number }</Type.Heading>
    <Type.SubHeading>{ name }</Type.SubHeading>
    <Type.SubHeading>${ price }</Type.SubHeading>
  </ActiveCaskContainers.Header>
);

export default Header;
