import React from 'react';

import { GenericComponentProps } from '../../types';
import { LinkButton } from '../Atoms/Link';

interface ComponentProps extends GenericComponentProps {
  to?: string;
  label?: string;
};

const SubNavigation: React.FC<ComponentProps> = ({
  to='#',
  label=''
}) => (
  <LinkButton to={ to }>{ label }</LinkButton>
);

export default SubNavigation;
