import * as React from 'react';
const { useState } = React;
import { useTypedSelector } from '../../utils';

import CaskListItem from '../OutturnCasks/CaskListItem';
import ActiveCask from '../OutturnCasks/ActiveCask';
import * as StyledComponents from '../styledcomponents/index';

const {
  StyledDiv: { BodyDiv },
  StyledButton: { Button },
  StyledCask: { CaskListDiv },
} = StyledComponents;

export default () => {

  const [ showMore, setShowMore ] = useState(12);
  const { allCasks, isLoading } = useTypedSelector(state => state);

  return (
    <div>
      <BodyDiv>
        <CaskListDiv>
          {
            allCasks.length
          ? allCasks.slice(0, showMore).map(cask => <CaskListItem key={ cask.id } cask={ cask } />)
          : null
          }
          {
            showMore < allCasks.length
          ? <Button variant='secondary' disabled={ !!isLoading } onClick={ () => setShowMore(showMore + 6) }>Show More</Button>
          : null
          }
        </CaskListDiv>
      <ActiveCask />
      </BodyDiv>
    </div>
  )
}