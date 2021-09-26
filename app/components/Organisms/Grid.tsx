import React from 'react';

import { Layout } from '../Atoms';

import { GenericComponentProps } from '../../types';

interface ComponentProps extends GenericComponentProps {
  listData: any[];
  renderData: (any) => JSX.Element;
};

const Grid: React.FC<ComponentProps> = ({
  listData = [],
  renderData
}) => <Layout.Grid>{ listData.map(listItem => renderData(listItem)) }</Layout.Grid>;

export default Grid;
