import * as React from 'react';

import * as StyledComponents from '../styledcomponents/index';
const { StyledType: { PageTitle } } = StyledComponents;

export default (props: any) => <PageTitle>{ props.pageTitle }</PageTitle>