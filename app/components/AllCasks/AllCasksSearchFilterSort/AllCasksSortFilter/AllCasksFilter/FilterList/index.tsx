import * as React from 'react';

import FilterListContainer from './FilterListContainer';
import ResetFilterButton from './ResetFiltersButton';
import FilterMenuToggleButton from './FilterMenuToggleButton';
import * as StyledComponents from '../../../../../styledcomponents';
const { StyledDiv: { Row } } = StyledComponents;

export default (filterMenuIsOpenProps) => {
  return (
    <Row width='100%' alignItems='center' justifyContent='flex-end' flexWrap='wrap-reverse'>
      <FilterListContainer />
      <ResetFilterButton />
      <FilterMenuToggleButton { ...filterMenuIsOpenProps } />
    </Row>
  )
}