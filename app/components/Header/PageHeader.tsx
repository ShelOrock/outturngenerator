import * as React from 'react';

import Toolbar from './Toolbar';
import SubNavigation from './SubNavigation';
import * as StyledComponents from '../styledcomponents/index';
const { 
  StyledDiv: { Column }
} = StyledComponents;

export default ({
  subNavigationProps: { link, destination },
  toolbarProps: { pageTitle, addButtonProps, deleteButtonProps }
}: any) => {
  return (
    <Column>
      <SubNavigation link={ link } destination={ destination } />
      <Toolbar pageTitle={ pageTitle } addButtonProps= { addButtonProps } deleteButtonProps={ deleteButtonProps } />
    </Column>
  )
}