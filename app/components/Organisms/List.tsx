import React from 'react';
import { DroppableProvided } from 'react-beautiful-dnd';

import { GenericComponentProps } from '../../types';

import { Layout } from '../Atoms';

interface ComponentProps extends GenericComponentProps {
  listData: any[];
  renderData: (any, number) => JSX.Element;
};

const List: React.FC<ComponentProps> = ({
  listData = [],
  renderData
}) => <Layout.List>{ listData.map((listItem, index) => renderData(listItem, index)) }</Layout.List>;

export default List;
