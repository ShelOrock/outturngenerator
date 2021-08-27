import * as React from 'react';
import { useTypedSelector } from '../../../../utils';

import CaskListItem from '../../../OutturnCasks/CaskListItem'
import * as StyledComponents from '../../../styledcomponents';
const { StyledList: { List } } = StyledComponents;

export default ({ sortProps, showMore }) => {

  const { search, allCasks } = useTypedSelector(state => state);

  return (
    <List>
    { !!allCasks.length && search.slice(0, showMore).map((cask) => <CaskListItem key={ cask.id } { ...cask } { ...sortProps } />) }
    </List>
  )
};