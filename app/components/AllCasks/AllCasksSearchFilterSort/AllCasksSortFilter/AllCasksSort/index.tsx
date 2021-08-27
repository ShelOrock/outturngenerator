import * as React from 'react';

import SelectManager from '../../../../Select/SelectManager';

import { SelectPropTypes, SelectOptionPropTypes } from '../../../../../types';

export default ({ sort, setSort }) => {

  const sortOptions: SelectOptionPropTypes = [
    {
      value: "ascending",
      name: "Ascending",
    },
    {
      value: "descending",
      name: "Descending",
    },
    {
      value: 'A-Z',
      name: 'A-Z'
    },
    {
      value: 'Z-A',
      name: 'Z-A'
    },
    {
      value: "newest",
      name: "Newest",
    },
    {
      value: "oldest",
      name: "Oldest",
    },
  ];

  const sortCasksSelectProps: SelectPropTypes = {
    selectValue: sort,
    label: "",
    onChange: (e) => setSort(e.target.value),
    width: "150px",
    options: sortOptions,
  };

  return <SelectManager { ...sortCasksSelectProps } />;
};