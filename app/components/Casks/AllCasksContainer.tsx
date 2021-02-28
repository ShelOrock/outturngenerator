import * as React from 'react';
const { useEffect, useState } = React;
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../utils';

import PageHeader from '../Header/PageHeader';
import CaskListItem from '../OutturnCasks/CaskListItem';
import ActiveCask from '../OutturnCasks/ActiveCask';
import AssociatedOutturn from './AssociatedOutturn';
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledDiv: { Column, Row },
  StyledButton: { Button },
  StyledForm: { Select },
  StyledCask: { CaskList },
} = StyledComponents;

import * as actions from '../../redux/actions';
const { markCaskActions: { resetMarkedCasks } } = actions;

import * as thunks from '../../redux/thunks';
const { casksThunks: { getCasks } } = thunks;

import { createCaskModal, deleteManyCasksModal } from '../../modalProps';
import { createModalButton } from '../../buttonProps';

export default () => {

  const dispatch = useDispatch();
  const [ sort, setSort ] = useState('ascending');
  const [ showMore, setShowMore ] = useState(12);
  const {
    allCasks,
    activeCask,
    markedCasks,
    isLoading,
  } = useTypedSelector(state => state);
  
  useEffect(() => { dispatch(resetMarkedCasks()) }, [])

  useEffect(() => { dispatch(getCasks(sort)) }, [sort]);

  return (
    <div>
      <PageHeader
        toolbarProps={ { 
          pageTitle: 'All Casks',
          addButtonProps: {
            variant: 'primary',
            onClickProps: createModalButton('+ Add a cask', createCaskModal(null, sort)) 
          },
          deleteButtonProps: {
            variant: 'secondary',
            onClickProps: createModalButton('X Delete Marked Casks', deleteManyCasksModal(markedCasks, activeCask, null, sort))
          }
        } }
      />
      <Select id='sortBy' name='sortBy' value={ sort } onChange={ e => setSort(e.target.value) }>
        <option value='ascending'>Ascending</option>
        <option value='descending'>Descending</option>
        <option value='newest'>Newest</option>
        <option value='oldest'>Oldest</option>
      </Select>
        <CaskList>
          {
            allCasks.length
          ? allCasks.slice(0, showMore).map(cask => <CaskListItem key={ cask.id } cask={ cask } sortMethod={ sort }/>)
          : null
          }
          {
            showMore < allCasks.length
          ? <Button
              size='default'
              variant='secondary'
              disabled={ !!isLoading } onClick={ () => setShowMore(showMore + 6) }
            >Show More</Button>
          : null
          }
        </CaskList>
      <Column>
        <ActiveCask />
        <AssociatedOutturn />
      </Column>
  </div>
  )
}