import * as React from 'react';
const { useState, useEffect } = React;
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../utils';

import PageHeader from '../Header/PageHeader';
import ButtonManager from '../Button/ButtonManager';
import OutturnCard from './OutturnCard';
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledCard: { CardsContainer },
  StyledDiv: { Column },
  StyledForm: { Select },
} = StyledComponents;

import * as actions from '../../redux/actions';
const { 
  activeCaskActions: { resetActiveCask },
  markOutturnActions: { resetMarkedOutturns },
  modalActions: { setModal }
} = actions;

import * as thunks from '../../redux/thunks';
const {
  outturnsThunks: { getOutturns }
} = thunks

import { deleteManyOutturnsModalProps, createOutturnModalProps } from '../../modalProps';
import { createButton, createModalButton } from '../../buttonProps';

export default () => {

  const dispatch = useDispatch();
  const [ showMore, setShowMore ] = useState(6);
  const [ sort, setSort ] = useState('newest');
  const { allOutturns, markedOutturns, isLoading } = useTypedSelector(state => state);

  useEffect(() => {
    dispatch(resetActiveCask());
    dispatch(setModal({}))
    dispatch(resetMarkedOutturns());
  }, []);

  useEffect(() => { dispatch(getOutturns(sort)) }, [sort]);

  return (
    <div>
      <Column>
        <PageHeader
          subNavigationProps={ {
            link: '#',
            destination: ''
          } }
          toolbarProps={ {
            pageTitle: 'All Projects',
            addButtonProps: {
              onClickProps: createModalButton('+ New Project', createOutturnModalProps(sort))
            },
            deleteButtonProps: {
              variant: 'tertiary',
              disabled: !markedOutturns.length,
              onClickProps: createModalButton('X Delete Marked Outturns', deleteManyOutturnsModalProps(markedOutturns, sort))
            }
          } }
        />
        <Select id='sortBy' name='sortBy' value={ sort } onChange={ e => setSort(e.target.value) }>
          <option value='newest'>Newest</option>
          <option value='oldest'>Oldest</option>
        </Select>
      </Column>
      <Column alignItems='center'>
      <CardsContainer>
        {
          allOutturns.length
          ? (allOutturns.slice(0, showMore)).map(outturn => <OutturnCard key={ outturn.id } outturn= { outturn } sortMethod={ sort }/>)
          : null
        }
      </CardsContainer>
        {
          showMore < allOutturns.length
          ? <ButtonManager 
              size='default'
              variant='secondary'
              disabled={ !!isLoading }
              dispatchToStore={ false }
              onClickFunctionProps={ createButton(setShowMore, 'Show more', showMore + 6)} />
          : null
        }
        </Column>

    </div>
  );
};