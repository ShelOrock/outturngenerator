import * as React from 'react';
const { useState } = React;

import FilterMenu from './FilterMenu';
import * as StyledComponents from '../styledcomponents/index'
const {
  StyledButton: { Button }
} = StyledComponents;

export default ({ sortMethod }: any) => {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <div>
      <Button
        size='default'
        variant='default'
        onClick={ () => setIsOpen(!isOpen) }
      >{ isOpen ? 'Collapse Filters' : 'Show Filters' }</Button>
      {
        isOpen
        ? <FilterMenu sortMethod={ sortMethod }/>
        : null
      }
    </div>
  )
}