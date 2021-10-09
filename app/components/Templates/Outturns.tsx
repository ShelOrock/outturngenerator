import React from 'react';

import { PageContainers } from '../Containers';

import { GenericComponentProps } from '../../types';

interface ComponentProps extends GenericComponentProps {
  header: JSX.Element;
  outturns: JSX.Element;
};

const OutturnsTemplate: React.FC<ComponentProps> = ({
  header,
  outturns,
}) => (
  <PageContainers.Main>
    <PageContainers.Header>
      { header }
    </PageContainers.Header>
    <PageContainers.Section>
      { outturns }
    </PageContainers.Section>
  </PageContainers.Main>
);

export default OutturnsTemplate;
