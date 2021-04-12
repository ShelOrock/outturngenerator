import * as React from 'react';

import Toolbar from './Toolbar';
import SubNavigation from './SubNavigation';
import * as StyledComponents from '../styledcomponents/index';
const { 
  StyledDiv: { Column }
} = StyledComponents;

export default ({
  subNavigationProps: { link, destination },
  toolbarProps: {
    pageTitle,
    addButtonProps,
    deleteButtonProps
  }
}: any) => {

  const subNavigationProps = {
    link,
    destination
  }

  const toolBarProps = {
    pageTitle,
    addButtonProps,
    deleteButtonProps
  }

  return (
    <Column>
      <SubNavigation { ...subNavigationProps } />
      <Toolbar { ...toolBarProps } />
    </Column>
  )
}