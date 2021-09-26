import React from 'react';

import { GenericComponentProps } from '../../types';

import { Layout } from '../Atoms';

interface ComponentProps extends GenericComponentProps {
  listData: any[];
  renderData: (any) => JSX.Element;
};

const List = ({
  listData = [],
  renderData
}) => <Layout.List>{ listData.map(listItem => renderData(listItem)) }</Layout.List>;

export default List;
