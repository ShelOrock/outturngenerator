import React from 'react';

import { PageContainers } from '../Containers';

import { GenericComponentProps } from '../../types';

interface ComponentProps extends GenericComponentProps {
  header: JSX.Element;
  sidebar: JSX.Element;
  action: JSX.Element;
  activeContent: JSX.Element;
};

const ActiveOutturnTemplate: React.FC<ComponentProps> = ({
  header,
  sidebar,
  action,
  activeContent
}) => (
  <PageContainers.Main>
    <PageContainers.Header>{ header }</PageContainers.Header>
    <PageContainers.Section>
      <PageContainers.Sidebar>
          { sidebar }
          { action }
      </PageContainers.Sidebar>
      <PageContainers.ActiveContent>{ activeContent }</PageContainers.ActiveContent>
    </PageContainers.Section>
  </PageContainers.Main>
);

export default ActiveOutturnTemplate;
