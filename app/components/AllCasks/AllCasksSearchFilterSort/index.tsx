import * as React from 'react';

import AllCasksSearch from './AllCasksSearch';
import AllCasksSortFilter from './AllCasksSortFilter';

export default (sortProps) => {

  return (
    <>
      <AllCasksSortFilter { ...sortProps } />
      <AllCasksSearch />
    </>
  )
}