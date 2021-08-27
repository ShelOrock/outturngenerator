import * as React from 'react';
const { useState } = React;

import AllCasksListContainer from './AllCaskListContainer';
import ShowMoreButton from './ShowMoreButton';

export default (sortProps) => {

  const [ showMore, setShowMore ] = useState(12);

  interface ShowMorePropTypes {
    showMore: number;
    setShowMore: React.Dispatch<React.SetStateAction<number>>;
  }

  const showMoreProps: ShowMorePropTypes = {
    showMore,
    setShowMore
  }

  return (
  <>
    <AllCasksListContainer { ...sortProps } { ...showMoreProps } />
    <ShowMoreButton { ...showMoreProps }/>
  </>
  );
};