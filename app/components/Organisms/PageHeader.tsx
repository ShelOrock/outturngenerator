import React from 'react';

import SubNavigation from '../Molecules/SubNavigation';
import Toolbar from '../Molecules/Toolbar';

import { ButtonProps, GenericComponentProps } from '../../types';
import { Column } from '../styledcomponents/Div';

interface ComponentProps extends GenericComponentProps {
  to: string;
  label: string;
  title: string;
  primaryAction: ButtonProps;
  secondaryAction?: ButtonProps;
};

const PageHeader: React.FC<ComponentProps> = ({
  to = '#',
  label = '',
  title = '',
  primaryAction,
  secondaryAction = {},
}) => (
  <Column>
    <SubNavigation
      to={ to }
      label={ label }
    />
    <Toolbar
      title={ title }
      primaryAction={ primaryAction }
      secondaryAction={ secondaryAction }
    />
  </Column>
);

export default PageHeader;
