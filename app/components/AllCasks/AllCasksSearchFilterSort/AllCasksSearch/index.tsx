import * as React from 'react';
import { useTypedSelector } from '../../../../utils';

import SearchManager from '../../../SearchManager/SearchManager';

import { Cask } from '../../../../types';

export default () => {

  const { allCasks } = useTypedSelector(state => state);

  interface SearchManagerPropTypes {
    placeholder: string;
    searchSet: Cask[];
    firstCriteria: string;
    secondCriteria: string;
  }

  const searchManagerProps: SearchManagerPropTypes = {
    placeholder: 'Search Casks',
    searchSet: allCasks,
    firstCriteria: 'name',
    secondCriteria: 'caskNumber'
  };

  return <SearchManager { ...searchManagerProps } />;
};