import * as React from 'react';
const { useEffect, useState } = React;
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../utils';

import PageHeader from '../PageHeader/PageHeader';
import CaskListItem from '../OutturnCasks/CaskListItem';
import ActiveCask from '../OutturnCasks/ActiveCask';
import AssociatedOutturn from './AssociatedOutturn';
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledDiv: { BodyDiv, Column },
  StyledButton: { Button },
  StyledCask: { CaskListDiv },
} = StyledComponents;

import * as actions from '../../redux/actions';
const { markCaskActions: { resetMarkedCasks } } = actions;

export default () => {

  const dispatch = useDispatch();
  const [ showMore, setShowMore ] = useState(12);
  const { allCasks, isLoading } = useTypedSelector(state => state);

  useEffect(() => {
    dispatch(resetMarkedCasks());
  }, [])

  return (
    <div>
      <PageHeader pageTitle='All Casks' />
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
      <Column>
        <ActiveCask />
        <AssociatedOutturn />
      </Column>
      </BodyDiv>
    </div>
  )
}