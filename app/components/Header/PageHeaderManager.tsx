//Dependency Libraries
import * as React from 'react';

//Components
import Toolbar from './Toolbar';
import SubNavigation from './SubNavigation';
//Styled Components
import * as StyledComponents from '../styledcomponents';
const { StyledDiv: { PaddedDiv, Column } } = StyledComponents;

//Types
import {
  SubNavigationPropTypes,
  ToolbarPropTypes,
  PageHeaderPropTypes
} from '../../types';

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
      <PaddedDiv paddingTop='1rem' paddingBottom='1rem' paddingRight='1rem' paddingLeft='1rem'>
        <SubNavigation { ...subNavigationProps } />
      </PaddedDiv>
      <Toolbar { ...toolBarProps } />
    </Column>
  )
}