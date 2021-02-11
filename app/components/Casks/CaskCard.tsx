import * as React from 'react';

import * as StyledComponents from '../styledcomponents/index';
const { StyledCard: { CardContainer, Card } } = StyledComponents;

import { CaskListItem } from '../../types/index';

export default ({ cask }: CaskListItem ) => {
  return (
    <div>
      <CardContainer>
        <Card>
            Cask Card{ cask.name }
        </Card>
      </CardContainer>
    </div>
  )
}