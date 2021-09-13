import React from 'react';

import { PageContainers } from '../Containers';

import { GenericComponentProps } from '../../types';

interface ComponentProps extends GenericComponentProps {
  toolbar: JSX.Element;
  sidebar: JSX.Element;
  activeContent: JSX.Element;
};

const ActiveOutturnTemplate: React.FC<ComponentProps> = ({
  toolbar,
  sidebar,
  activeContent
}) => (
  <PageContainers.Main>
    <PageContainers.Header>{ toolbar }</PageContainers.Header>
    <PageContainers.Section>
      <PageContainers.Sidebar>{ sidebar }</PageContainers.Sidebar>
      <PageContainers.ActiveContent>{ activeContent }</PageContainers.ActiveContent>
    </PageContainers.Section>
  </PageContainers.Main>
);

export default ActiveOutturnTemplate;
