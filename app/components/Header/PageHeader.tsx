import * as React from 'react';

import Toolbar from './Toolbar';
import SubNavigation from './SubNavigation';
import * as StyledComponents from '../styledcomponents/index';
import { PaddedDiv } from '../styledcomponents/Div';
const { StyledDiv: { Column } } = StyledComponents;

import {
  SubNavigationPropTypes,
  ToolbarPropTypes,
  PageHeaderPropTypes
} from '../../types/index';

export default ({
  subNavigationProps: { link, destination },
  toolbarProps: {
    pageTitle,
    addButtonProps,
    deleteButtonProps
  }
}: PageHeaderPropTypes) => {

  const subNavigationProps: SubNavigationPropTypes = {
    link,
    destination
  };

  const toolBarProps: ToolbarPropTypes = {
    pageTitle,
    addButtonProps,
    deleteButtonProps
  };

  return (
    <Column>
      <PaddedDiv paddingTop='1rem' paddingBottom='1rem' paddingRight='1rem' paddingLeft='2rem'>
        <SubNavigation { ...subNavigationProps } />
      </PaddedDiv>
      <Toolbar { ...toolBarProps } />
    </Column>
  )
}