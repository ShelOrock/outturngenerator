import React from 'react';

import SubNavigation from '../Molecules/SubNavigation';
import Toolbar from '../Molecules/Toolbar';

import { GenericComponentProps } from '../../types';
import { Column } from '../styledcomponents/Div';

interface ComponentProps extends GenericComponentProps {
  subNavigation: any //TODO;
  toolbar: any //TODO;
};

const PageHeader: React.FC<ComponentProps> = ({
  subNavigation,
  toolbar
}) => (
  <Column>
    <SubNavigation
      to={ subNavigation.to }
      label={ subNavigation.label }
    />
    <Toolbar
      title={ toolbar.title }
      primaryButton={ toolbar.primaryButton }
      secondaryButton={ toolbar.secondaryButton }
    />
  </Column>
);

export default PageHeader;
