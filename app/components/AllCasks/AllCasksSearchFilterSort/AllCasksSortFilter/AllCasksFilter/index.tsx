import * as React from 'react';
const { useState } = React;

import FilterList from './FilterList';
import FilterMenu from './FilterMenu';

export default () => {

  const [ filterMenuIsOpen, setFilterMenuIsOpen ] = useState(false);

  interface FilterPropTypes {
    filterMenuIsOpen: boolean;
    setFilterMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };

  const filterMenuProps: FilterPropTypes = {
    filterMenuIsOpen,
    setFilterMenuIsOpen
  };

  return (
    <>
      <FilterList { ...filterMenuProps } />
      <FilterMenu { ...filterMenuProps } />
    </>
  )
}