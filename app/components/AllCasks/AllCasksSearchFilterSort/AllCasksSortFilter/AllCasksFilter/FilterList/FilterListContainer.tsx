import * as React from 'react';
import { useTypedSelector } from '../../../../../../utils';

import FilterListItems from './FilterListItems';
import * as StyledComponents from '../../../../../styledcomponents';
const { StyledDiv: { Row } } = StyledComponents;

export default (): JSX.Element => {

  const { filters } = useTypedSelector(state => state);

  return (
    <Row alignItems='center' flexWrap='wrap' justifyContent='flex-end'>
    { !!filters.length && filters.map((filter: string, idx: number): JSX.Element => <FilterListItems key={ idx } filter={ filter } />) }
    </Row>
  );
};